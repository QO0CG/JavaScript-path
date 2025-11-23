import { Navbar } from "@/components/Navbar";
import { ResourceCard } from "@/components/ResourceCard";
import hsoubImage from "@/assets/hsoub-academy.jpg";
import harmashImage from "@/assets/harmash.jpg";

const Arabic = () => {
  const resources = [
    {
      name: "أكاديمية حسوب",
      description: "منصة متكاملة تقدم محتوى عربي عالي الجودة والترتيب. تقدم الأكاديمية دورات مدفوعة، لكنها تُعتبر مرجعاً موثوقاً لما تقدمه من تنظيم ومحتوى منهجي. تغطي هذه الدورة الجافاسكريبت بعمق، بدءاً من البناء وصولاً إلى تطبيقات عملية متقدمة وكيفية التعامل مع الـ APIs. تُعد خياراً لمن يبحث عن منهجية أكاديمية منظمة ودعم مجتمعي.",
      url: "https://academy.hsoub.com/learn/javascript-application-development/",
      image: hsoubImage,
    },
    {
      name: "Harmash (هرمش)",
      description: "دورات ومقالات عربية تركز على التطبيق العملي والتمارين. يقدم موقع وقناة هرمش محتوى تعليمي متنوع، بما في ذلك دورة جافاسكريبت تغطي الأساسيات والمفاهيم الهامة. يتميز بتقديمه لتمارين بعد كل درس لضمان الفهم والتطبيق. مصدر جيد للتنوع والتعلم من زاوية تطبيقية مباشرة باللغة العربية.",
      url: "https://harmash.com/tutorials/javascript/overview",
      image: harmashImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-accent-glow bg-clip-text text-transparent">
              المصادر العربية
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            محتوى عربي عالي الجودة من منصات وأكاديميات عربية موثوقة
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <div
              key={resource.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ResourceCard {...resource} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arabic;
