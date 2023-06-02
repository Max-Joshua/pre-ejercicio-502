from app import main
import random

def test_main():
    expected_answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again']
    
    # Set a fixed seed for the random number generator to make the test deterministic
    random.seed(42)
    
    # Call the main function
    result = main()
    
    # Check if the result is one of the expected answers
    assert result in expected_answers