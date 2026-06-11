import { FadeText } from "../UI/fade-text";

export function FadeTextComp() {
  return (
    <div className="flex flex-col space-y-0 text-center">
      <FadeText
        className="font-gloria font-light text-3xl text-center text-ink leading-tight tracking-tight"
        direction="up"
        framerProps={{
          show: { transition: { delay: 1.75 } },
        }}
        text={
          <>
            Every <span className="text-greenPri">challenge</span> has a
          </>
        }
      />
      <FadeText
        className="font-gloria text-3xl text-center text-ink leading-tight tracking-tight"
        direction="right"
        framerProps={{
          show: { transition: { delay: 2 } },
        }}
        text={
          <>
            <span className="text-greenPri">solution</span>—let&apos;s uncover
          </>
        }
      />
      <FadeText
        className="font-gloria text-3xl text-center text-ink leading-tight tracking-tight"
        direction="down"
        framerProps={{
          show: { transition: { delay: 2.25 } },
        }}
        text="yours together."
      />
    </div>
  );
}
