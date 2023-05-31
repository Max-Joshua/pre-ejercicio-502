from handler import handler
import unittest

class MainTest(unittest.TestCase):
    def test_handler(self):
        print("Testing handler")
        result = handler()
        self.assertEqual(result, {
        'statusCode': 200,
        'body': 'Hello Diego'
    })

if __name__  == '_main_':
    unittest.main()