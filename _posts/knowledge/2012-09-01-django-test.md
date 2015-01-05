---
layout: post
title: "Django testing"
excerpt: "Djang testing basics"
categories: [knowledge, django]
tags: [django]
---

Basics
========
Basic rules

* all tests affected by the code change

doctest pros:

* easy to re-use work done by python shell try-out.
* tests themselves need not to be debugged.
* self documentation for the code.

Replace the detailed message portion of the expected error message with `...`
or print the type of exception only:

    >>> s = Survey.objects.create(title=t) # doctest: +IGNORE_EXCEPTION_DETAIL  
    or
    >>> s = Survey.objects.create(title=t)
    Traceback (most recent call last):
    ...
    IntegrityError: ...

Call unicode string:

    >>> t='something_Chinese_string'.decode('utf-8')

Test command explain
-----------------------

    django-admin.py startproject demo

You can add a file called `tests.py` in `demo/demo/` folder.
__test__ can be defined in models.py or tests.py

For new test cases:
  
    from django.test import TestCase

For current existing code, replace 
   
    import unittest 
    with
    from django.utils import unittest

    ./manage.py test app_name
    ./manage.py test -v VERBOSITY 0=min 1=default normal 2=all
    ./manage.py test --pattern="tests_*.py"

## Unit Test ##

    import datetime
    from django.test import TestCase
    from django.db import IntegrityError
    from survey.models import Survey
    class SurveySaveTest(TestCase):
      t = "New Year's Resolutions"
      sd = datetime.date(2009, 12, 28)
      def testClosesAutoset(self):
        s = Survey.objects.create(title=self.t, opens=self.sd)
        self.assertEqual(s.closes, datetime.date(2010, 1, 4))
        self.assertRaises(IntegrityError, s.save)
        # more descriptive
        self.assertEqual(s.closes, datetime.date(2010, 1,4),
          "closes not autoset to 7 days later, expected %s"
          ", acutally %s" %
          (datetime.date(2010, 1, 4), s.closes))

More precise control

    python manage.py test survey.SurveySaveTest.testClosesAutoset

## Fixture, test data##        
`manage.py dumpdata/loaddata/testserver` to load test data

    # default format is JSON
    python manage.py dumpdata --indent 4 > test_whole.json
    python manage.py dumpdata $myapp > test_single_app.json
    python manage.py dumpdata $myapp.$mymodel > test_single_model.json

    manage.py loaddata $fixturename

put it in `<app>/fixtures`, load in TestCase,

    class QuestionWinningAnswersTest(TestCase):
        fixtures = ['test_winning_answers.json']

## Django test Client ##        

Default test folder structure: 

    /tests/
      __init__.py
      model_tests.py
      view_tests.py
      admin_tests.py
      ...

in `__init__.py`, 

      from model_tests import *
      from view_tests import *
      from admin_tests import *

    >>> from django.test.utils import setup_test_environment
    >>> setup_test_environment()
    >>> from django.test.client import Client
    >>> # create an instance of the client for our use
    >>> client = Client()

    import datetime
    from django.test import TestCase
    class SurveyTest(TestCase):
      def setUp(self):
        Survey.objects.all().delete()

      def testHome(self):
        from django.core.urlresolvers import reverse
        response = self.client.get(reverse('survey_home'))
        response = self.client.get('/survey/',
          data={'pk': 4, 'type': 'results'})
        response = self.client.get('/', HTTP_USER_AGENT='Tester')

        completed = response.context['completed_surveys']
        self.assertEqual(len(completed), 2)
        for survey in completed:
          self.failUnless(survey.title.startswith("Completed"))


        self.assertEqual(response.status_code, 200)
        self.assertContains 
        self.assertNotContains

      # test 404
      def testUpcoming(self):
        survey = Survey.objects.get(title='Upcoming 1')
        response = self.client.get(reverse('survey_detail',
        args=(survey.pk,)))
        self.assertEqual(response.status_code, 404)

      # test template used
      def testCompleted(self):
        survey = Survey.objects.get(title='Too Old')
        response = self.client.get(reverse('survey_detail',
        args=(survey.pk,)))
        self.assertTemplateUsed(response,
        'survey/completed_survey.html')

        see also: assertTemplateNotUsed

### test admin customization ###

    import datetime
    from django.test import TestCase
    from django.core.urlresolvers import reverse
    class AdminSurveyTest(TestCase):
      def testAddSurveyError(self):
        post_data = {
          'title': u'Time Traveling',
          'opens': datetime.date.today(),
          'closes': datetime.date.today() - datetime.timedelta(1),
          'question_set-TOTAL_FORMS': u'0',
          'question_set-INITIAL_FORMS': u'0',
        }
        response = self.client.post(
          reverse('admin:survey_survey_add'), post_data)
        self.assertContains(response,
          "Opens date cannot come after closes date.")
        # or 
        self.assertRedirects(response,
          reverse('admin:survey_survey_changelist'))


      def setUp(self):
        self.username = 'survey_admin'
        self.pw = 'pwpwpw'
        self.user = User.objects.create_user(self.username, '',
        self.pw)
        self.user.is_staff= True
        self.user.is_superuser = True
        self.user.save()
        self.assertTrue(self.client.login(username=self.username,
          password=self.pw),
          "Logging in user %s, pw %s failed." %
          (self.username, self.pw))

      def tearDown(self):
          self.client.logout()


When `Inline` is used in `ManagementForm`, need to define:

    'TOTAL_FORMS': u'0',
    'INITIAL_FORMS': u'0',



External Tools
=================
 * [coverage.py][] shows how much your code has been covered in the test.
 * [selenium][], automation test framework, has python bindings
 * nose: test framework
 * twill: web testing tool especially for form testing.
 
## coverage ##
In Ubuntu, it is called `python-coverage` since the name is used by another
software package.

    sudo aptitude install python-coverage
    cd /usr/bin
    sudo ln -s python-coverage coverage

To run the tests and record coverage data:

    coverage run manage.py test survey

To view the report:

    coverage report --omit /usr -m

    -m: print the lines NOT executed during the run

Install django-coverage

    pip install django-coverage

    in settings.py
    TEST_RUNNER = 'django_coverage.coverage_runner.run_tests'

    or add django_coverage to INSTALLED_APPS
    then run
    manage.py test_coverage <app_name>
    in settings.py
    COVERAGE_REPORT_HTML_OUTPUT_DIR = '/dj_projects/marketr/coverage_html'

## twill ##
Pros: easy to integrate GET and POST; get the default values from GET.

    twill-sh

    go http://localhost:8000/admin/survey/survey/add/
    showforms
    formvalue <form_number> var_1 value_1
    submit <sbmt_name>
    find "some string you are looking for"
    showforms # to see the values in the form
    show # display HTML code

    from django.core.handlers.wsgi import WSGIHandler
    import twill
    TWILL_TEST_HOST = 'twilltest'
    twill.add_wsgi_intercept(TWILL_TEST_HOST, 80, WSGIHandler)

    def reverse_for_twill(named_url):
      return 'http://' + TWILL_TEST_HOST + reverse(named_url)


    from django.db import close_connection
    from django.core import signals
    from django.core.handlers.wsgi import WSGIHandler
    from django.conf import settings
    import twill
    class AdminSurveyTwillTest(AdminTest):
      def setUp(self):
        super(AdminSurveyTwillTest, self).setUp()
        self.old_propagate = settings.DEBUG_PROPAGATE_EXCEPTIONS
        settings.DEBUG_PROPAGATE_EXCEPTIONS = True
        signals.request_finished.disconnect(close_connection)
        twill.add_wsgi_intercept(TWILL_TEST_HOST, 80, WSGIHandler)
        self.browser = twill.get_browser()
        self.browser.go(reverse_for_twill('admin:index'))
        twill.commands.formvalue(1, 'username', self.username)
        twill.commands.formvalue(1, 'password', self.pw)
        self.browser.submit()
        twill.commands.find('Welcome')

      def tearDown(self):
        self.browser.go(reverse_for_twill('admin:logout'))
        twill.remove_wsgi_intercept(TWILL_TEST_HOST, 80)
        signals.request_finished.connect(close_connection)
        settings.DEBUG_PROPAGATE_EXCEPTIONS = self.old_propagate

      def testAddSurveyError(self):
        self.browser.go(reverse_for_twill('admin:survey_survey_add'))
        twill.commands.formvalue(1, 'title', 'Time Traveling')
        twill.commands.formvalue(1, 'opens',
          str(datetime.date.today()))

        twill.commands.formvalue(1, 'closes',
          str(datetime.date.today()-datetime.timedelta(1)))
        self.browser.submit()
        twill.commands.url(reverse_for_twill(
          'admin:survey_survey_add'))
        twill.commands.find("Opens date cannot come after closes "
          "date.")

      def testAddSurveyOK(self):
          self.browser.go(reverse_for_twill('admin:survey_survey_add'))
          twill.commands.formvalue(1, 'title', 'Not Time Traveling')
          twill.commands.formvalue(1, 'opens',
            str(datetime.date.today()))
          twill.commands.formvalue(1, 'closes',
            str(datetime.date.today()))
          self.browser.submit()
          twill.commands.url(reverse_for_twill(
            'admin:survey_survey_changelist'))


Resources
==============
 * [Official doc][]

[coverage.py]: http://nedbatchelder.com/code/coverage/
[selenium]: http://selenium.openqa.org/
[Official doc]:https://docs.djangoproject.com/en/dev/topics/testing/overview/

