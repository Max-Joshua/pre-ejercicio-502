from index import handler
import unittest

class TestHandlerCase(unittest.TestCase):
    
        def test_response(self):
            result = handler()
            self.assertEqual(result['statusCode'], 200)
            self.assertEqual(result['body'], 'Hola Salomon Dabbah desde Lambda!')   

if __name__ == '__main__':
    unittest.main()
    