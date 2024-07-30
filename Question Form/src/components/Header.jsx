import HeaderImage from '../assets/quiz-logo.png';
export default function Header(){

    return <header>
        <img src={HeaderImage} alt="booklet" />
        <h1>ReactQuiz</h1>
    </header>
}