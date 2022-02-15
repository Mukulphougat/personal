function About() {
    return (
        <div class="about-container">
            <div class="about-me">
                <span>Hey</span>
                <p class="para-graph" align="justify">
                    My name is Mukul. I'm a MCA student at <a href="https://www.cuchd.in/" target="_blank">Chandigarh University</a>.
                    I'm also a web development enthusiast. And in free time i like
                    to solve coding problems on <a href="https://leetcode.com/mukulphougat/" target="_blank">leetcode</a>.
                </p>
            </div>
            <div class="skills">
                <span>My Skills</span>
                <div class="skill-container">
                    <label class="lab">Frontend </label>
                    <p></p>
                    <progress value="60" max="100"></progress>
                    <p></p>
                    <label class="lab">Backend </label>
                    <p></p>
                    <progress value="50" max="100"></progress>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default About;