// Options the user could type in
const prompts = [

  // ["himanshu"],
  ["hi","hello"],
  ["how are you"],
  ["focus"],
  ["founder"],
  ["approach"],
  ["mentoring"],
  ["education gap"],
  ["mindset"],
  ["challenge"],
  ["pioneering"],
  ["signifiance"],
  ["societal shift"],
  ["vision"],
  ["movement"],
  ["impact"]
  // ["hi", "hey", "hello", "good morning", "good afternoon"],
  // ["how are you", "how is life", "how are things"],
  // ["What is the primary focus of SciAstra?","Focus"],
  // ["Who founded SciAstra and what was their motivation?","Founder"],
  // ["How does SciAstra differ from traditional coaching centers?","Approach"],
  // ["What is the philosophy behind SciAstra's mentoring approach?","Mentoring"],
  // [
  //   "What gap in education does SciAstra aim to fill?","Education Gap"
  // ],
  // ["How does SciAstra aim to change students' approach to science?","Mindset"],
  // ["What societal challenges does SciAstra seek to overcome in education?","Challenge"],
  // ["What distinguishes SciAstra as a pioneer in the education sector?","Pioneering"],
  // ["How does SciAstra contribute to the understanding of science's importance in various fields?","Significance"],
  // ["What societal changes does SciAstra hope to bring about?","Societal Shift"],
  // ["What vision does SciAstra have for the future of education?","Vision"],
  // ["How does SciAstra describe itself as more than just an institution?","Movement"],
  // ["How does SciAstra align with the current global trends of innovation and curiosity?","Alignment"],
  // ["What impact does SciAstra aim to have on its students?","Impact"],
  // ["How does SciAstra contribute to the broader landscape of education?","Contibution"],
  // [""],
  // ["haha","ha","lol","hehe","funny","joke"]

]

// Possible responses, in corresponding order

const replies = [
  // ["Srivastava"],
  ["hello"],
  ["Fine..."],
  ["Guiding students interested in science and research.","SciAstra is dedicated to guiding students interested in pursuing careers in science and research. It aims to ignite passion for science, nurture research appreciation, and develop critical thinking skills among students."],
  ["Former research scholars addressing educational gaps.","SciAstra was founded by former research scholars who aimed to address the lack of a platform that specifically guides and nurtures students inclined towards science and research."],
  ["Emphasizing understanding over memorization.","SciAstra takes a fresh approach to education by emphasizing understanding concepts rather than rote memorization. It encourages curiosity and aims to make science enjoyable for students."],
  ["Inspiring curiosity and scientific thinking.","Mentors at SciAstra inspire students to be naturally curious about science, guiding them to think like scientists and fostering a love for the subject."],
  ["Lack of awareness about research-based courses.","SciAstra addresses the lack of awareness about research-based courses, aiming to steer students towards scientific learning and away from conventional paths."],
  ["Cultivating a scientific approach among students."],
  ["Breaking societal norms in education."],
  ["Innovative approach to scientific education."],
  ["Highlighting science's role in engineering and medicine."],
  [" Valuing curiosity and research-based thinking."],
  ["Leading scientific exploration in education."],
  ["Transforming students into scientific thinkers."],
  ["Nurturing love for science and critical thinking."]
  // ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  // [
  //   "Fine... how are you?",
  //   "Pretty well, how are you?",
  //   "Fantastic, how are you?"
  // ],
  // [
  //   "SciAstra is dedicated to guiding students interested in pursuing careers in science and research. It aims to ignite passion for science, nurture research appreciation, and develop critical thinking skills among students."
  // ],
  // ["SciAstra was founded by former research scholars who aimed to address the lack of a platform that specifically guides and nurtures students inclined towards science and research."],
  // ["SciAstra takes a fresh approach to education by emphasizing understanding concepts rather than rote memorization. It encourages curiosity and aims to make science enjoyable for students."],
  // ["Mentors at SciAstra inspire students to be naturally curious about science, guiding them to think like scientists and fostering a love for the subject."],
  // ["SciAstra addresses the lack of awareness about research-based courses, aiming to steer students towards scientific learning and away from conventional paths."],
  // ["SciAstra's goal is to help students think like scientists, fostering a scientific mindset and encouraging them to question and explore."],
  // ["SciAstra challenges the societal norm of following conventional paths by encouraging students to pursue what they are passionate about, particularly in the field of science."],
  // ["SciAstra stands out as a pioneering platform guiding students towards scientific exploration and research, offering an innovative educational approach."],
  // ["SciAstra emphasizes the significance of science in fields like engineering and medicine, promoting a deeper understanding of these subjects."],
  // ["SciAstra aims to influence a shift towards a society where curiosity, scientific exploration, and research-based thinking are highly valued."],
  // ["SciAstra envisions a future where scientific exploration and research take the lead, fostering a generation of curious thinkers prepared to influence the world."],
  // ["SciAstra is seen as a movement that transforms students into curious thinkers, preparing them to view the world through a scientific lens."],
  // ["SciAstra aligns with global trends by encouraging intellectual curiosity and innovative thinking, empowering students to explore scientific perspectives"],
  // ["SciAstra aims to create a lasting impact by nurturing a love for science, encouraging critical thinking, and fostering a passion for research."],
  // ["SciAstra contributes by reshaping traditional education paradigms, emphasizing scientific curiosity, and preparing students for a future driven by scientific exploration and understanding."],
  // ["Please say something :("],
  // ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]