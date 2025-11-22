import { Navbar } from "@/components/Navbar";
import { ResourceCard } from "@/components/ResourceCard";
import mdnImage from "@/assets/mdn.jpg";
import freecodecampImage from "@/assets/freecodecamp.jpg";
import w3schoolsImage from "@/assets/w3schools.jpg";
import odinProjectImage from "@/assets/odin-project.jpg";
import learnJsImage from "@/assets/learn-js.jpg";

const International = () => {
  const resources = [
    {
      name: "MDN Web Docs",
      description: "المرجع الرسمي والأكثر موثوقية لمطوري الويب. يُعد MDN المكتبة الشاملة والعميقة لجميع تقنيات الويب، بما في ذلك جافاسكريبت. إنه ليس مجرد كورس، بل هو موسوعة تغطي أساسيات اللغة، وظائفها المتقدمة (مثل Promises و Async/Await)، وأفضل الممارسات.",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image: mdnImage,
    },
    {
      name: "freeCodeCamp",
      description: "مسار تعليمي تفاعلي يركز على التطبيق العملي وبناء المشاريع. تقدم freeCodeCamp مسار JavaScript Algorithms and Data Structures المجاني بالكامل. يتميز ببيئة عمل متكاملة حيث تتعلم وتكتب الكود وتختبره في نفس الصفحة. ممتاز لبناء محفظة أعمال قوية.",
      url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      image: freecodecampImage,
    },
    {
      name: "W3Schools",
      description: "مرجع سريع وسهل الاستيعاب للمبتدئين. يُعرف W3Schools بتقديمه شروحات بسيطة ومباشرة مع أمثلة كود جاهزة قابلة للتنفيذ الفوري. إنه نقطة انطلاق ممتازة لمن يريد فهم الأساسيات بسرعة. يُستخدم كـ مفكرة سريعة لمعرفة بناء الجملة للوظائف المختلفة.",
      url: "https://www.w3schools.com/js/",
      image: w3schoolsImage,
    },
    {
      name: "The Odin Project",
      description: "مسار شامل مجاني يعتمد على المشاريع الواقعية. يوفر مسارهم الخاص بتطوير الويب جزءاً كبيراً لتعلم جافاسكريبت بعمق، مع التركيز على كيفية بناء مشاريع فعلية من الصفر. المنهج مُنظم ليوجه الطالب لبناء تطبيقات كاملة. خيار مثالي لمن يفضل التعلم عن طريق الممارسة.",
      url: "https://www.theodinproject.com/paths/full-stack-javascript",
      image: odinProjectImage,
    },
    {
      name: "learn-js.org",
      description: "منصة تعليمية تركز على الجانب التفاعلي للغة. يقدم هذا الموقع تحديات وتمارين مباشرة في المتصفح، مما يسمح للمتعلم بتطبيق المفاهيم فورًا. يغطي أساسيات اللغة بطريقة سلسة ومنظمة، مع تقديم أمثلة بسيطة لكل مفهوم. جيد جداً لترسيخ الأساسيات.",
      url: "https://learn-js.org/",
      image: learnJsImage,
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
              المصادر الأجنبية
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            أفضل المواقع والمراجع العالمية لتعلم JavaScript من مصادر موثوقة ومجربة
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default International;
