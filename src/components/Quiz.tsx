"use client";

import { useState } from "react";
import { quiz } from "@/lib/quiz/quiz"
import { CodeLang } from "@/lib/quiz/quiz";

type Props = {
    codeLang: CodeLang
}

export default function Quiz({ codeLang }: Props) {
    const [index, setIndex] = useState(0)
    const [selected, setSelected] = useState<string | null> (null)
    const [showResult, setShowResult] = useState(false)

    const question = quiz[index]
    const selectedOption = question.options.find(
        (o) => o.id === selected
    )

    function nextQuestion() {
        setSelected(null)
        setShowResult(false)
        setIndex((prev) => (prev + 1) % quiz.length)
    }
  return (
    <main className="space-y-6">
      <h2 className="text-xl font-bold">
        {question.question}
      </h2>

      <pre className="
      bg-black/80 text-green-300 
      p-4 rounded">
        {question.examples[codeLang]}
      </pre>


      <section className="space-y-2">
        {question.options.map((option) => (
        <button
        key={option.id}
        onClick={() => setSelected(option.id)}
        disabled={showResult}
        className={`
            w-full text-left p-3 rounded border
            ${selected === option.id ? "border-blue-500" : "border-white/20"}
            `}
            >
                {option.text}
            </button>
        ))}
      </section>

      {!showResult ? (
        <button
        disabled={!selected}
        onClick={() => setShowResult(true)}
        className="mt-4"
        >
            Sjekk svar
        </button>
        ) : (
            <section className="space-y-2">
                <p className="font-semibold">
                    {selectedOption?.correct ? "✅Riktig" : "❌Feil"}
                </p>
                <p>{question.explanation}</p>
                <button onClick={nextQuestion}>
                    Neste spørsmål →
                </button>
            </section>
      )}
    </main>
  )
}
