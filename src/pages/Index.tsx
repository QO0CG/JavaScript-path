import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-accent-glow bg-clip-text text-transparent">
                تعلم JavaScript
              </span>
              <br />
              <span className="text-foreground">من أفضل المصادر</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              اكتشف أفضل المصادر العالمية والعربية لتعلم جافاسكريبت من الصفر حتى الاحتراف.
              مصادر مجانية وموثوقة لجميع المستويات.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:translate-y-[-2px] group"
              >
                <Link to="/international" className="flex items-center gap-2">
                  <span>ابدأ التعلم الآن</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-primary/50 hover:bg-primary/5"
              >
                <Link to="/courses">
                  استكشف الكورسات
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/international"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-hover animate-fade-in"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  مصادر أجنبية
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  أفضل المواقع العالمية مثل MDN و freeCodeCamp و W3Schools لتعلم JavaScript بعمق
                </p>
              </div>
            </Link>

            <Link
              to="/arabic"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-hover animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  مصادر عربية
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  محتوى عربي عالي الجودة من أكاديمية حسوب ومنصات تعليمية عربية موثوقة
                </p>
              </div>
            </Link>

            <Link
              to="/courses"
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-hover animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent-glow/10 flex items-center justify-center group-hover:bg-accent-glow/20 transition-colors">
                  <Youtube className="h-7 w-7 text-accent-glow" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  كورسات وكتب
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  كورسات يوتيوب مجانية وكتب إلكترونية لتعميق معرفتك بجافاسكريبت
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
