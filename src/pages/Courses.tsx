import { Navbar } from "@/components/Navbar";
import { ResourceCard } from "@/components/ResourceCard";
import elzeroImage from "@/assets/elzero.jpg";
import abdelrahmanImage from "@/assets/abdelrahman-gamal.jpg";
import { BookOpen } from "lucide-react";

const Courses = () => {
  const youtubeCourses = [
    {
      name: "Elzero Web School - كورس JavaScript",
      description: "الكورس العربي الأشهر والأكثر شمولاً لتعلم جافاسكريبت. يقدمه المهندس أسامة الزيرو، ويمتاز بأسلوبه المفصل والاحترافي، حيث يغطي جميع جوانب اللغة بدءاً من الصفر وحتى المفاهيم المتقدمة. الكورس محدّث ويشمل ميزات ECMAScript الحديثة (ES6+). مرجع أساسي لا غنى عنه للمتعلم العربي.",
      url: "https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv",
      image: elzeroImage,
    },
    {
      name: "Abdelrahman Gamal - كورس JavaScript كامل",
      description: "كورس مبسط ومكثف للمبتدئين في فيديو واحد. يقدم عبد الرحمن جمال شروحات لأساسيات جافاسكريبت بأسلوب سريع وواضح، مما يجعله خياراً ممتازاً لمن يريد إنجاز الأساسيات في وقت قصير. يركز على إيصال المعلومة بشكل مباشر ومفهوم. مناسب كمدخل سريع للغة.",
      url: "https://www.youtube.com/watch?v=GM6dQBmc-Xg",
      image: abdelrahmanImage,
    },
  ];

  const books = [
    {
      name: "Eloquent JavaScript, 3rd Edition",
      description: "كتاب كلاسيكي ومتقدم يركز على الجانب النظري والعميق للغة. هذا الكتاب ليس للمبتدئين بالمعنى الحرفي، بل هو للمتعلم الذي يملك أساسيات اللغة ويرغب في الغوص في آليات عملها، البرمجة الشيئية، وكيفية بناء مشاريع حقيقية. ممتاز لتطوير مهارات التفكير البرمجي المعقد.",
      url: "https://eloquentjavascript.net/",
    },
    {
      name: "You Don't Know JS Yet (YDKJS)",
      description: "سلسلة كتب شهيرة وضرورية لفهم جوانب جافاسكريبت المخفية. بقلم Kyle Simpson، هذه السلسلة تُعد مرجعاً لفهم المفاهيم الأساسية التي غالباً ما يساء فهمها، مثل this، النطاق، و closures. قراءتها إجبارية للمطورين الذين يريدون الانتقال من مستوى استخدام اللغة إلى مستوى فهم كيفية عملها بعمق.",
      url: "https://github.com/getify/You-Dont-Know-JS",
    },
    {
      name: "كتاب البرمجة بلغة جافاسكربت",
      description: "كتاب مرجعي شامل ومُصاغ باللغة العربية الفصحى. يغطي الكتاب أساسيات لغة جافاسكريبت وميزاتها الحديثة (ES6+). يتميز بتنظيمه الجيد وشرحه المفصل الذي يسهل على القارئ العربي فهم المفاهيم دون عوائق لغوية. يغطي مواضيع متقدمة مثل التعامل مع الـ DOM. مصدر مكتوب قوي وموثوق.",
      url: "https://wiki.hsoub.com/JavaScript",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* YouTube Courses Section */}
        <section className="animate-fade-in">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-accent-glow bg-clip-text text-transparent">
                كورسات اليوتيوب
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أفضل كورسات اليوتيوب العربية المجانية لتعلم JavaScript بشكل تفاعلي
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {youtubeCourses.map((course, index) => (
              <div
                key={course.name}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ResourceCard {...course} />
              </div>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-accent-glow bg-clip-text text-transparent">
                كتب ومراجع مجانية
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              كتب إلكترونية مجانية لتعميق فهمك لجافاسكريبت
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div
                key={book.name}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 floating-card animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {book.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>

                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
                  >
                    <span>اقرأ الكتاب</span>
                    <span>←</span>
                  </a>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/20 via-primary/20 to-accent-glow/20 rounded-2xl blur-lg" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
