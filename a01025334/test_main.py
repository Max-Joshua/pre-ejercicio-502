from main import handler
import unittest

class MainTest(unittest.TestCase):
    def test_handler(self):
        result = handler()
        self.assertEqual(result, "Hello Marco Torres")