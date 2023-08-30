import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useState } from 'react';
import { LegendToggleRounded } from '@mui/icons-material';





function App() {

  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  let [marks, setMarks] = useState<number>(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  type quizQuestions =
    {
      question: string,
      options: string[],
      answer: string,
    }




  let quizQuestions = [
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["ul", "li", "ol", "dl"],
      answer: "ul"
    },
    {
      question: "Which attribute is used to define inline styles in HTML?",
      options: ["class", "id", "style", "src"],
      answer: "style"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["br", "lb", "break", "line"],
      answer: "br"
    },
    {
      question: "Which HTML tag is used to display an image?",
      options: ["img", "src", "image", "picture"],
      answer: "img"
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["alt", "title", "src", "href"],
      answer: "alt"
    },
    {
      question: "Which property is used to change the text color in CSS?",
      options: ["color", "text-color", "font-color", "text-style"],
      answer: "color"
    },
    {
      question: "Which CSS property is used to control the spacing between lines of text?",
      options: ["line-height", "text-spacing", "line-spacing", "text-line"],
      answer: "line-height"
    },
    {
      question: "Which property is used to apply rounded corners to an element in CSS?",
      options: ["border-radius", "corner-radius", "border-style", "border-round"],
      answer: "border-radius"
    },
    {
      question: "Which CSS property is used to set the background color of an element?",
      options: ["background-color", "bg-color", "color-background", "element-background"],
      answer: "background-color"
    },
    {
      question: "Which property is used to control the opacity of an element in CSS?",
      options: ["opacity", "transparent", "visibility", "alpha"],
      answer: "opacity"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "variable"],
      answer: "var"
    },
    {
      question: "Which JavaScript method is used to remove the last element from an array?",
      options: ["pop()", "shift()", "slice()", "splice()"],
      answer: "pop()"
    },
    {
      question: "Which function is used to execute a block of code repeatedly at a set interval?",
      options: ["setInterval()", "setTimeout()", "forEach()", "while()"],
      answer: "setInterval()"
    },
    {
      question: "Which operator is used to check if two values are equal in JavaScript?",
      options: ["==", "===", "=", "!="],
      answer: "=="
    },
    {
      question: "Which method is used to convert a string to uppercase in JavaScript?",
      options: ["toUpperCase()", "toLowerCase()", "toUppercase()", "toUpper()"],
      answer: "toUpperCase()"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);



  const handlingUpcomingQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }
  let checkAnswer = function (a: any, b: any) {

    if (!answeredQuestions.includes(currentQuestionIndex + 1)) {
      if (a == b) {
       
        setMarks((prevMarks) => prevMarks + 1);
    }
    setAnsweredQuestions((prevAnswered) => [...prevAnswered, currentQuestionIndex]);
  


      if (currentQuestionIndex + 1 == quizQuestions.length) {
        alert("Your marks are" + marks + "out of" + quizQuestions.length)
      }

    }
  }

  return (

    <>
      <div>

        {/* Random Functionalities */}
        <h1 className='text-center fst-italic my-2'>| Quiz App |</h1>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Box>
              <Grid container spacing={2}>
                <Grid xs={12} md={12} lg={12} sm={12}>
                  <Item className='bg-warning-subtle'>

                    <CollectionsBookmarkIcon sx={{
                      fontSize: "medium"
                    }} />
                    <Typography marginLeft={0.5} variant="overline" display="block" gutterBottom>
                      Question No.


                      &nbsp;

                      <span>{currentQuestionIndex + 1}</span>/<span>{quizQuestions.length}</span>
                    </Typography>
                  </Item>
                </Grid>

                {/* <Grid xs={12} md={6} lg={6} sm={12}>
                  <Item className='bg-warning-subtle'>
                    <AccessTimeIcon sx={{
                      fontSize: "medium"
                    }} />

                    <Typography marginLeft={0.5} variant="overline" display="block" gutterBottom>
                      Time


                      &nbsp;
                      <span>00</span>:<span>00</span>:<span>00</span>
                    </Typography></Item>
                </Grid> */}
              </Grid>
            </Box>
          </Container>
        </React.Fragment>

        {/* Question */}


        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Box>
              <Grid container spacing={2} >
                <Grid xs={12} md={12} lg={12} sm={12}>
                  <Item className='bg-danger-subtle my-3'>
                    <Typography variant="body2" gutterBottom className='p-2'>
                      {quizQuestions[currentQuestionIndex].question}
                    </Typography>
                  </Item>
                </Grid>

              </Grid>
            </Box>
          </Container>
        </React.Fragment>


        {/* Options */}
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Box>
              <Grid container spacing={2} >
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                  <Grid key={index} xs={12} md={6} lg={6} sm={12}>
                    <Item className='bg-info-subtle'>
                      <Button
                        fullWidth={true}
                        onClick={() => {
                          handlingUpcomingQuestion(); 
                          checkAnswer(option, quizQuestions[currentQuestionIndex].answer); 
                        }}
                        sx={{
                          textTransform: 'none'
                        }}
                        className='text-body-secondary'
                      >
                        {option}
                      </Button>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
}

export default App;
