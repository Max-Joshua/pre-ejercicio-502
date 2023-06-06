from lambda_function import lambda_handler
import unittest


class MainTest(unittest.TestCase):
    def test_handler(self):
        result = lambda_handler(None, None)
        self.assertEqual(result, "Hello Marco Torres")
