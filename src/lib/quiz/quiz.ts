export type CodeLang = "python" | "javascript" | "typescript"


export type AnswerOption = {
    id: string
    text: string
    correct: boolean
}


export type QuizQuestion = {
 id: string
 category: "syntax" | "function"
 question: string
 explanation: string
 examples: Record<CodeLang, string>
 options: AnswerOption[]
}

export const quiz: QuizQuestion[] = [
    {
        id: "function_definition",
        category:"syntax",
        question:"Hvordan vil du definere en funksjon?",
        explanation:
        "En funksjon defineres forskjellig i hvert språk, men konseptet er det samme: gi funksjonen et navn og parametere.",
        examples: {
            python: "def add(a, b): return a + b",
            javascript: "function add (a, b) {return a + b}",
            typescript: "function add (a: number, b: number): number { return a + b }",
        },
        options: [
            {
                id: "a",
                text: "ved å bruke class",
                correct: false,
            },
            {
                id: "b",
                text: "ved å bruke def / function / function med typer",
                correct: true,
            },
            {
                id: "c",
                text: "ved å bruke if else",
                correct: false,
            },
        ],
    },

    {
        id: "pure_function",
        category: "function",
        question: "hva er en ren funksjon?",
        explanation:
        "En ren funksjon har ingen sideeffekter og gir alltid samme resultat for samme input.",
        examples: {
            python: "def add(a, b): return a + b",
            javascript: "const add = (a, b) => a + b",
            typescript: "const add = (a: number, b: number): number => a + b",
        },
        options: [
            {
                id: "a",
                text: "En funksjon som endrer variabler",
                correct: false,
            },
            {
                id: "b", 
                text: "en funksjon som alltid er async",
                correct: false,
            },
            {
                id: "c",
                text: "en fuksjon uten sideeffekter",
                correct: true,
            }

        ]
    }
]