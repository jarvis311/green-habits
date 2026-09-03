import type { NutritionFacts } from "@/data/types";

export function NutritionFactsPanel({ nutrition }: { nutrition: NutritionFacts }) {
  const facts = [
    { label: "Calories", value: nutrition.calories ? `${nutrition.calories} kcal` : undefined },
    { label: "Protein", value: nutrition.proteinGrams ? `${nutrition.proteinGrams}g` : undefined },
    { label: "Carbs", value: nutrition.carbsGrams ? `${nutrition.carbsGrams}g` : undefined },
    { label: "Fat", value: nutrition.fatGrams ? `${nutrition.fatGrams}g` : undefined },
  ].filter((f) => f.value);

  if (facts.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="text-overline font-bold uppercase text-white/70">Nutritional Design Details</span>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <span className="text-body-sm text-white/60">{fact.label}</span>
            <span className="font-serif text-h2 text-white">{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
