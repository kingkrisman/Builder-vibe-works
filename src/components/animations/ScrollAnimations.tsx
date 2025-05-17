import { useRef, useEffect, ReactNode } from "react";
import {
  useInView,
  motion,
  useAnimation,
  MotionProps,
  Variant,
} from "framer-motion";

type AnimationVariants = {
  hidden: Variant;
  visible: Variant;
};

interface ScrollAnimationProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
  as?: React.ElementType;
}

// Animation variant presets
export const fadeInUp: AnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: AnimationVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: AnimationVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: AnimationVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeIn: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleUp: AnimationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const scaleDown: AnimationVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

export const FadeInUp = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const FadeInDown = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInDown}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const FadeInLeft = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInLeft}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const FadeInRight = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInRight}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const FadeIn = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const ScaleUp = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={scaleUp}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const ScaleDown = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  as = "div",
  ...rest
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={scaleDown}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

// Create a customizable ScrollAnimation component
export const ScrollAnimation = ({
  children,
  className,
  delay = 0,
  once = true,
  threshold = 0.1,
  variants = fadeInUp,
  as = "div",
  ...rest
}: ScrollAnimationProps & { variants?: AnimationVariants }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};
