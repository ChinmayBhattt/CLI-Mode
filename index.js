#!/usr/bin/env node

import * as p from '@clack/prompts';
import color from 'picocolors';
import { constrainedMemory } from 'process';
import { setTimeout } from 'timers/promises';

let correctTotal = 0;

async function askQuestion(question, answers, correctAnswerIndex) {
    const options = []
    answers.forEach((answer) => {
        options.push({ value: answer, label: answer })
    });

    const answer = await p.select({
        message: question,
        initialValue: answers[0],
        options: options,
    });

    const s = p.spinner();
    s.start("Checking answer...");
    await setTimeout(1000);
    s.stop("Answer checked");

    if (answer == answers[correctAnswerIndex - 1]) {
        correctTotal++;
    }
}

class Question {

    constructor(question, answersArray, correctAnswerIndex) {
        this.question = question;
        this.answers = answersArray;
        this.correctAnswerIndex = correctAnswerIndex;
    }

}

async function main() {

    p.intro(`${color.bgRed(color.black(`Welcome to the ${color.bold(`Chinmay Bhatt`)}🚀🚀🚀`))}`);

    const question1 = new Question(
        "Is HTML a programming language?",
        ["Yes", "No"],
        2
    );

     const question2 = new Question(
        "When was JavaScript created?",
       ["1990", "2003", "1995", "2010"],
        3
    );

     const question3 = new Question(
        "What does CSS stand for?",
        ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        2
    );

     const question4 = new Question(
        "Which HTML tag is used to define an internal style sheet?",
        ["<css>", "<script>", "<style>", "<link>"],
        3
    );

    const question5 = new Question(
        "Which is the correct CSS syntax?",
        ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
        3
    );

    const question6 = new Question(
        "How do you write 'Hello World' in an alert box?",
        ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
        4
    );

    const question7 = new Question(
        "Which event occurs when the user clicks on an HTML element?",
        ["onchange", "onclick", "onmouseclick", "onmouseover"],
        2
    );

    const question8 = new Question(
        "What is the correct way to write a JavaScript array?",
        ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'"],
        3
    );

    const question9 = new Question(
        "Which operator is used to assign a value to a variable?",
        ["*", "-", "x", "="],
        4
    );

    const question10 = new Question(
        "What will the following code return: Boolean(10 > 9)?",
        ["false", "true", "NaN", "undefined"],
        2
    );

    const allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

    const readyToplay = await p.select({
        message: "No cheating. 5 questions. Results at the end. Ready to play?",
        initialValue: "Yes",
        options: [
            {value: "Yes", label: "Yes"},
            {value: "No", label: "No"}],
            
    })

    if (readyToplay == "Yes"){
        //  Begin trivia game
        for (const question of allQuestions) {
        await askQuestion(question.question, question.answers, question.correctAnswerIndex);
        
    }
    p.outro(`${color.bgRed(color.black(`You Got ${color.bold(correctTotal)} Questions Correct`))}`);

    if (correctTotal === 10) {
        const s = p.spinner();
        s.start ("Generating gift card code..."); 
        await setTimeout (5000);
        s.stop () ;
        p.outro(`${color.bgWhite(color.black(`Code ${color.bold("XG-882-991")}`))}`);

        }else{
            const s = p.spinner();
            s.start();
            await setTimeout(3000);
            s.stop();
            p.outro(`${color.bgCyan(color.black(`You need 10 correct answers to get the code`))}`);

        }
  }

    p.outro(`${color.bgCyan(color.black(`Thank You For the Playing the games ${color.bold(`Chinmay Bhatt`)}🚀🚀🚀`))}`);

}
main().catch(console.error);
