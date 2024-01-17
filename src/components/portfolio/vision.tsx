const Vision = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex flex-col items-start justify-start`}>
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        VISION 🔭
      </h2>
      <div className="flex flex-row items-start justify-start text-justify">
        <div className="flex flex-col gap-1">
          <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
            Design for Support
          </p>
          <p className="font-medium">
            For me, design is a tool to be able to find solutions to users&apos;
            difficulties and challenges within a home and work environment. I
            aim to make our daily lives a smoother experience by linking our
            day-to-day life with state-of-the-art technologies that can assist
            us with everyday tasks. I want to provide products for users that
            aim at reducing the everyday stress of life and do not add to an
            already growing pile of &apos;tech&apos; or &apos;bloatware&apos; in
            the home, like is happening now with voice assistants or remotes.
            New technology products need to be aware of the ecosystem they live
            in and be able to transform themselves to adapt to the needs of
            their user and work together with other devices with which they
            share the digital ecosystem. Why create new interactions if we can
            attach actions to already existing interactions?
          </p>
        </div>
        <div className="flex flex-col gap-1 mx-8">
          <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
            Data & Connections
          </p>
          <p className="font-medium ">
            There is so much information available in the world, but society is
            now just diving into how to make value using this information in an
            aggregated form. With artificial intelligence, like ChatGPT, now
            more intelligent than ever, society has gotten a taste of the power
            of insights gained from mass information. As a designer, I want to
            make use of the sheer amount of information available and what we
            can gather from user environments to create optimal value.
          </p>
          <p className="font-medium ">
            Data and information are better perceived when felt or heard as part
            of a rich interaction scheme rather than being read from a chart. A
            great example is haptic interfaces which are led by a
            digital-context initiative. By bringing data and information into
            the physical world and the everyday life of the user, I want my
            designs to provide for a living-data environment, where data and
            information are not held private but live in full transparency, and
            only work towards creating value for the user without too complex or
            unnecessary features. In this space, I think it&apos;s important to
            stray away from notifications, dings, pings and similar
            attention-seeking methods, but lay a bigger focus on multi-modal
            interaction schemes which feel intuitive and seek emotional
            attachment instead of taking concentration away.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
            Emergent Tech for Adaptive Design
          </p>
          <p className="font-medium">
            Due to the complex and ever-changing world around us, I find it
            important to design for the future. Designs that will be able to
            adapt themselves based on how they are being used. By learning from
            the past and integrating current trends, designs will be better
            prepared for the future, where smart products feel like an extension
            of human life and not as a mediator. Experimenting with the latest
            technologies and using them to create novel concepts will act as a
            springboard towards radical innovation and out-of-the-box designs
            which can have true value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
