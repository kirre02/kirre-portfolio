function Intro() {
  const date = new Date();
  const age = date.getFullYear() - 2002;

  console.log(age);

  return (
    <>
      <div className="prose max-w-5xl">
        <h1 className="text-2xl md:text-2xl dark:text-sky-100 mb-1 md:mb-3 font-bold">
          Introduction
        </h1>
        <p>
          Hi! I'm an aspiring software developer with a passion for coding and
          problem-solving. My journey began in high school with Python, sparking
          my interest in programming. Since then, I’ve pursued foundational
          studies, gained professional experience, and am now enrolled in a
          Higher Vocational Education program focused on Java and software
          development. Feel free to explore my portfolio and see what I’ve been
          working on!
        </p>

        <p></p>
      </div>
    </>
  );
}

export default Intro;
