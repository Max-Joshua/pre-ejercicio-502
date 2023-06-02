# 8 Ball Magic

import math
import os
import sys
import random

def main():
    # Maigc 8 Puzzle
    answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again']

    num_answers = len(answers)
    
    print('Welcome to the Magic 8-Ball!')
    answer = random.randint(0, num_answers-1)
    return answers[answer]