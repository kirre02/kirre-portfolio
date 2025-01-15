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
          Hi, I am a {age} year old student who aspire to be a software
          engineer. Found my passion for programming back in high school where I
          was introduced to it through the programming course. Have always found
          it fun to solve problems, especially through coding.
        </p>

        <p></p>
      </div>
    </>
  );
}

export default Intro;
