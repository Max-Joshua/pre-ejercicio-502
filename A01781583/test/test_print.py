# file to test return 'Hello World'

from main import say_Hello


def test_say_Hello():
    assert say_Hello() == 'Hello World'
