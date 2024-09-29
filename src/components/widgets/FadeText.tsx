import { FadeText } from "../UI/fade-text";


export function FadeTextComp() {
  return (
    <div className="flex flex-col space-y-0 text-center">
      <FadeText
        className="font-gloria text-3xl text-center text-secondary leading-tight tracking-tight"
        direction="up"
        framerProps={{
          show: { transition: { delay: 2.25 } },
        }}
        text="Every challenge has a"
      />
      <FadeText
        className="font-gloria text-3xl text-center text-secondary leading-tight tracking-tight"
        direction="right"
        framerProps={{
          show: { transition: { delay: 2.5 } },
        }}
        text="solution—let's uncover"
      />
      <FadeText
        className="font-gloria text-3xl text-center text-secondary leading-tight tracking-tight"
        direction="down"
        framerProps={{
          show: { transition: { delay: 2.75 } },
        }}
        text="yours together."
      />
    </div>
  );
}
