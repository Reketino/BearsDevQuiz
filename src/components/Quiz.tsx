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
    <div>
      
    </div>
  )
}
