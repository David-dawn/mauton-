import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

gsap.registerPlugin(useGSAP);

const ChristianRizz = () => {
  const container = useRef(null);
  const rizzText1 = useRef(null);
  const rizzText2 = useRef(null);
  const rizzText3 = useRef(null);
  const rizzText4 = useRef(null);
  const rizzText5 = useRef(null);
  const heart = useRef(null);

  useGSAP(() => {
    // Fade in the container
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    // Text animations
    const tl = gsap.timeline({ delay: 1 });
    tl.fromTo(
      rizzText1.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" }
    )
      .fromTo(
        rizzText2.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" }
      )
      .fromTo(
        rizzText3.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        rizzText4.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" }
      )
      .fromTo(
        rizzText5.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" }
      );

    // Floating heart animation
    gsap.to(heart.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={container}
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 flex flex-col justify-center items-center text-white text-center p-6"
    >
      {/* Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute text-red-500 animate-fall"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        For God's Own, Elizabeth 🌟
      </h1>

      {/* Rizz Texts */}
      <p ref={rizzText1} className="text-lg md:text-xl font-medium mb-4">
        "Mauton, 1 Peter 4:8 says, <br />
        <span className="italic">
          ‘Most important of all, continue to show deep love for one another.’
        </span>
        <br />
        So let me know how deeply you want to be loved, and I’ll match it…"
      </p>

      <p ref={rizzText2} className="text-lg md:text-xl font-medium mb-4">
        "You must be the Proverbs 31 kind of woman, <br /> because everything
        about you is{" "}
        <span className="font-bold text-yellow-300">
          worth far more than rubies.
        </span>
      </p>

      <p ref={rizzText3} className="text-lg md:text-xl font-medium mb-4">
        "God said, ‘Let there be light.’ <br />
        And then, He created your smile."
      </p>

      <p ref={rizzText4} className="text-lg md:text-xl font-medium mb-4">
        "Elizabeth, when I prayed for someone special, <br />
        I didn’t expect God to outdo Himself, <br />
        but He sent you."
      </p>

      <p ref={rizzText5} className="text-lg md:text-xl font-medium mb-4">
        "If love is patient and kind, <br />
        then I guess I learned how to love <br />
        the moment I met you."
      </p>

      {/* Floating Heart */}
      <div ref={heart} className="text-6xl mt-8">
        ❤️
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm">
  <p>
    A page made just for you, Mauton ✨ <br />
    Because you're God's own, and you deserve the best. <br />
    Your unwavering dedication and love for the things of God constantly inspire me, <br />
    and I’m in awe of the way you balance everything so beautifully. <br />
    Keep shining, you're a true testament to faith and hard work.
  </p>
</footer>

    </div>
  );
};

export default ChristianRizz;
