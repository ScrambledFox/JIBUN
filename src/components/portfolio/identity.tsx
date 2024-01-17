const Identity = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} flex flex-col items-start justify-start text-justify xl:col-span-4 md:order-2 md:col-span-8`}
    >
      <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
        IDENTITY 👨🏻‍💻
      </h2>
      <p className="font-medium">
        My name is <strong>Joris Lodewijks</strong> and with a focus on
        user-centred design, I design products by analysing gathered data from
        the user&apos;s environment and digital ecosystem. I create
        high-fidelity software and hardware prototypes to validate my designs in
        lab and field test settings to be able to test intended use but also
        give space for emergent functionality to surface. I embrace this
        emergent functionality and provide space for it to live inside my
        designs.
      </p>
      <p className="font-medium my-4">
        My expertise lies in creating powerful virtual prototypes fast,
        especially when it comes to creating connected systems. With a focus on
        the Internet of Things and connected systems designs, I create online
        tools and powerful hardware devices to create a data-rich environment to
        validate my designs, which can be integrated without too much hassle in
        an already existing environment and even learn from it.
      </p>
      <p className="font-medium">
        I see myself as a designer who is not afraid to dive into the deep and
        learn a new skill. I am able to work in close relations with an
        engineering team without falling behind in knowledge. When it comes to
        creating prototypes, I will use tools to my advantage to quickly create
        high-quality products. While my expertise lies in creating digital
        solutions, I see myself as a jack-of-all-trades who can understand and
        provide in a lot of different areas of expertise and is not afraid to
        spend time to come up to speed in less-explored topics. I thrive when
        working as a supporter and can build on the work of others quickly. I
        love having a balance between exploration and exploitation, where I can
        create something new and focus on the details at the same time.
      </p>
    </div>
  );
};

export default Identity;
