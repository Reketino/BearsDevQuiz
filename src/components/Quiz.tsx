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

    </main>
  )
}
