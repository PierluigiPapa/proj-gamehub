import { useEffect, useState, useRef } from "react";

const stats = [
    {id: 1, label: "Giochi venduti", value: 34400},
    {id: 2, label: "Utenti registrati", value: 5300},
    {id: 3, label: "Accessori venduti", value: 14700},
    {id: 4, label: "Titoli in catalogo", value: 2700},
    {id: 5, label: "Ordini effettuati", value: 11900},
    {id: 6, label: "Paesi spediti", value: 29},
    {id: 7, label: "Giochi in preordine", value: 1100},
    {id: 8, label: "Recensioni clienti", value: 930},
];

export function Statistiche() {
    const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (currentSection) observer.observe(currentSection);

        return () => {
            if (currentSection) observer.unobserve(currentSection);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return; 

        const duration = 2000; 
        const intervalTime = 30;

        const intervals = stats.map((stat, index) => {
            const step = stat.value / (duration / intervalTime);
            return setInterval(() => {
                setAnimatedValues(prev => {
                    const newValues = [...prev];
                    if (newValues[index] < stat.value) {
                        newValues[index] = Math.min(newValues[index] + step, stat.value);
                    }
                    return newValues;
                });
            }, intervalTime);
        });

        return () => intervals.forEach(clearInterval);
    }, [hasAnimated]);

    const formatValue = (value) => {
        if (value >= 1000) return (value / 1000).toFixed(1) + "K";
        return value;
    };

    return (
        <section ref={sectionRef} className="bg-blu py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Le nostre statistiche
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="bg-slate-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                            <p className="text-3xl font-extrabold text-[#0286df]">
                                {formatValue(Math.floor(animatedValues[index]))}
                            </p>
                            <p className="text-sm text-gray-300 mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
