import { workedTechs } from '../../data/worked-tech'
const AboutContent = () => {
  return (
    <div className="my-10 mx-2">
      <h3 className="text-sm">let's talk a bit about me</h3>
      <p className="text-base text-paragraph mt-2">
        Hi, my name is Maykell. Nice to meet you! I have been a web developer for about two years. I
        am focused on the Front-end side but from time to time I like to learn a bit what happens
        behind the scenes... we talk about the backend side, of course.
      </p>
      <p className="mt-2">
        <strong className="text-xs font-bold">
          “I like to create things thinking that they will help many people.”
        </strong>
      </p>
      <p className="text-base text-paragraph mt-2">
        Like many developers I started out trying to create video games but it would be nothing more
        than a hobby that inspired me on my path as a developer and finally when I met web
        development it was like pieces that came together, little solutions that give me the
        opportunity to help many people just from my computer.
      </p>
      <p className="mt-2">
        <strong className="font-semibold text-base">Some technologies that I work with:</strong>
      </p>
      <ul className="grid grid-cols-2 mt-2">
        {workedTechs.map(tech => (
          <li key={tech} className="text-base text-paragraph">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutContent
