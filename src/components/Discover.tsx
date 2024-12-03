import {
  Zap,
  ChartLine,
  LifeBuoy,
  Palette,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { SVGProps } from "react";

// Define a union type for valid icons
type IconKey =
  | "zap"
  | "chart-spline"
  | "life-buoy"
  | "palette"
  | "shield-check"
  | "waypoints";

// Ensure the icons are compatible with SVGProps<SVGSVGElement>
const iconMap: Record<IconKey, React.FC<SVGProps<SVGSVGElement>>> = {
  zap: Zap,
  "chart-spline": ChartLine,
  "life-buoy": LifeBuoy,
  palette: Palette,
  "shield-check": ShieldCheck,
  waypoints: MapPin,
};

export const Discover = () => {
  const features: { title: string; description: string; icon: IconKey }[] = [
    {
      title: "Fast and Efficient",
      description:
        "Experience quick and seamless content creation with our optimized AI tools.",
      icon: "zap",
    },
    {
      title: "Insightful Analytics",
      description:
        "Gain valuable insights and analytics to enhance your social media strategy.",
      icon: "chart-spline",
    },
    {
      title: "24/7 Support",
      description:
        "Our team is available around the clock to assist with any issues or questions.",
      icon: "life-buoy",
    },
    {
      title: "Customizable Solutions",
      description:
        "Tailor the tools and features to fit your unique social media needs.",
      icon: "palette",
    },
    {
      title: "Secure and Reliable",
      description:
        "Trust our platform to keep your data safe and ensure consistent performance.",
      icon: "shield-check",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrate with your existing social media platforms and tools.",
      icon: "waypoints",
    },
  ];

  return (
    <div className="flex flex-col bg-black items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div
        className="w-full h-full "
        style={{ opacity: 1, transform: "none", willChange: "auto" }}
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="px-4 py-1 border border-zinc-600 rounded-full bg-primary/20 cursor-pointer select-none">
            <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
              Perks
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl text-white lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Discover the benefits
          </h2>
          <p className="text-base text-zinc-400 md:text-lg text-center text-accent-foreground/80 mt-6">
            Explore the powerful features and advantages that Luro offers to
            help you grow your social media presence.
          </p>
        </div>
      </div>
      <div
        className="max-w-7xl  px-4 md:px-12 py-20 relative size-full"
        style={{ opacity: 1, transform: "none", willChange: "auto" }}
      >
        <div className="mt-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800 lg:border-b"
                >
                  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-violet-950/25 to-transparent pointer-events-none"></div>
                  <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
                    <div className="mb-4 relative z-10 px-10">
                    <IconComponent
  className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-white"
/>

                    </div>
                    <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
                      <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-violet-600 transition-all duration-500 origin-center"></div>
                      <span className="transition duration-500 inline-block text-violet-300">
                        {feature.title}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
