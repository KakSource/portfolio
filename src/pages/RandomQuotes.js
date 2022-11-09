import "./styles/QuoteGenerator.css";
import { useState } from "react";

let quotes = [
  {
    quote_es: "No permitas que el internet te apure, nadie postea sus fracasos",
    quote_en:
      "Don't let the internet rush you, no one is posting their failures.",
  },
  {
    quote_es: "¿Por qué dejar para mañana lo que puedes hacer hoy?",
    quote_en: "Why whould you leave for tomorrow that what you can do today",
  },
  {
    quote_es:
      "Cuando la vida parece que apesta para ti, recuerda que hay alguien sentado del otro lado sacándole todo el jugo.",
    quote_en:
      "When life seems to suck for you, remember there's another person sitting at the other end of the stick sucking all the juice.",
  },
  {
    quote_es:
      "Tiempos difíciles crean hombres fuertes, hombres fuertes crean buenos tiempos, buenos tiempos crean hombres débiles y finalmente hombres débiles crean tiempos difíciles.",
    quote_en:
      "Hard times makes men strong, strong men create good times, good times create weak men and finnally weak men create hard times.",
  },
  {
    quote_es:
      "Tu peor enemigo siempre será tu mente sino la controlas, no solo porque es quien conoce tus debilidades, sino porque es quien las crea. – Buda",
    quote_en:
      "Your worst enemy will always be your mind if you don't control it, not only because he knows your weaknesess, but because it is whom creates it",
  },
  {
    quote_es: "El silencio es sabio. Observa, escucha y luego actúa.",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "Seeking love and approval is a sure way to lose the awareness of both.",
  },
  {
    quote_es: "",
    quote_en: "The squeaky wheel gets the grease. – Dan Pena",
  },
  {
    quote_es: "Las almas se reconocen por su vibración, no por su apariencia.",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "Those who do not remember the past are condemned to repeat it. -Santayana",
  },
  {
    quote_es:
      "Cuando una flor no florece, arreglas el ambiente en el cual crece, no a la flor.",
    quote_en: "",
  },
  {
    quote_es:
      "Dicen que es más oscuro antes del anochecer, y que las estrellas brillan más en las noches más oscuras.",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "No one wins in the end. We all age and die so fast, we only salvage what we can in our short time here -TechLead",
  },
  {
    quote_es: "",
    quote_en:
      "Sometimes you have to take one step back to take two step forwards.",
  },
  {
    quote_es: "",
    quote_en:
      "Great minds discuss ideas, average minds discuss events, small minds discuss people",
  },
  {
    quote_es: "",
    quote_en: "If you're not failing, you're not trying hard enough",
  },
  {
    quote_es: "",
    quote_en:
      "Sucking at something, is the first step to being sort of good at something",
  },
  {
    quote_es:
      "Si estás pasando por un infierno, sigue adelante. ¿Por qué pararías en el infierno?",
    quote_en: "",
  },
  {
    quote_es: "Siempre que reprimes algo, volverá a brotar una y otra vez.",
    quote_en: "",
  },
  {
    quote_es:
      "Una vez rota la inocencia no se puede volver atrás, solo se puede ir hasta la iluminación...",
    quote_en: "",
  },
  {
    quote_es:
      "El conocimiento es como una balsa, se usa para cruzar el rio, pero no te lo podés llevar encima, llevártelo encima te va a hacer sufrir y no vas a poder hacer nada mas.",
    quote_en: "",
  },
  {
    quote_es:
      "Vive como si fueras a morir mañana. Aprende como si fueras a vivir por siempre. Mahatma Gandhi",
    quote_en: "",
  },
  {
    quote_es:
      "¿Sabes por qué el mundo está así? Por gente que se cree que sabe lo que hay que decir y se esfuerzan para mentir, mientras otros enfrentan lo que es vivir, y yo siento que no tengo ni que hablar, porque cada palabra puede usarse para el mal por gente estupida mental -Eminem",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en: "An army march on its stomach - Napoleon",
  },
  {
    quote_es: "Aquel que compite es como si estuviera muerto -Buda",
    quote_en: "",
  },
  {
    quote_es:
      "Cómo no ser una persona ruin, si el sistema me está forjando ruinmente... Si haces eso arrastrarás un karma que desde luego impedirá que obtengas los resultados adecuados. Estarás creando una serie de facturas y deudas que tarde o temprano acabarás pagando. El universo funciona con el equilibrio y si tu das mal y recibes mal, el universo te va a devolver eso -JL",
    quote_en: "",
  },
  {
    quote_es:
      "Hay preguntas para las que no tendrás respuesta ni dedicándoles 10 vidas. No te pierdas entre todo lo que pasa en tu mente",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "The loneliest people are the kindest, the saddest people smile the brightest, and the most damaged people are the wisest, all because they don't wish to see others suffer like they do",
  },
  {
    quote_es: "",
    quote_en: "When ships were made of wood, men were made of steel.",
  },
  {
    quote_es:
      "Amor de puta y vino de frasco, a la noche gustosos y en el día dan asco.",
    quote_en: "",
  },
  {
    quote_es: "No hay hierva mala para una vaca hambrienta.",
    quote_en: "",
  },
  {
    quote_es:
      "Cuando la pobreza entra por la puerta, el amor sale por la ventana.",
    quote_en: "",
  },
  {
    quote_es: "Al pobre y al feo todo se le va en deseo.",
    quote_en: "",
  },
  {
    quote_es: "En tierra de ciegos el tuerto es rey.",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en: "Be careful with who you trust, salt and sugar look the same",
  },
  {
    quote_es: "",
    quote_en:
      "If I had an hour to solve the problem and my life depended on the solution. I would spend the first 55 minutes determining the proper question to ask... for once I know the proper question, I could solve the problem in less than five minutes.",
  },
  {
    quote_es:
      "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia.",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en: "Ships cannot remain where the water is too shallow",
  },
  {
    quote_es:
      "Lo que piensas, te conviertes. Lo que sientes, lo atraes. Lo que imaginas, lo creas - Buda",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "One of the really tough things is figuring out what question to ask, once you figure it out the question the answer is relatively easy – Elon Musk",
  },
  {
    quote_es: "Como te trata la gente es su karma, como reaccionas es el tuyo.",
    quote_en: "",
  },
  {
    quote_es:
      "Aquel que blande su espada con pura fuerza no es fuerte de verdad.",
    quote_en: "",
  },
  {
    quote_es:
      "Rana del pozo que no conoce el mar. Aprende lo grande que es el mundo. Conócete a ti mismo, conoce al mundo y vuélvete más fuerte.",
    quote_en: "",
  },
  {
    quote_es:
      "Es de tontos tenerle miedo a lo que aún estar por ver y conocerse -Itachi",
    quote_en: "",
  },
  {
    quote_es:
      "Las personas viven atadas a lo que ven como 'correcto' o 'verdadero', a eso es lo que llaman 'realidad', sin embargo, 'correcto' y 'verdadero' no son más que términos imprecisos, su realidad podría ser una ilusión. Todos viven por sus propias suposiciones. -Itachi",
    quote_en: "",
  },
  {
    quote_es:
      "Si nunca rendirme significa ser un tonto, entonces prefiero ser un tonto toda la vida. -Naruto Uzumaki",
    quote_en: "",
  },
  {
    quote_es:
      "Perdón por el retraso, me perdí por el sendero de la vida. -Kakashi Hatake",
    quote_en: "",
  },
  {
    quote_es:
      "El poder de creer en ti mismo puede ser el poder para cambiar el destino. -Rock Lee",
    quote_en: "",
  },
  {
    quote_es:
      "Si uno quiere saber quién es en realidad, tiene que mirarse a sí mismo y aceptarse... Los que no son capaces de aceptarse tal como son, terminarán fracasando. -Itachi",
    quote_en: "",
  },
  {
    quote_es:
      "El fin de una persona no es cuando muere. Si no cuando pierde la fe. -Hanzo",
    quote_en: "",
  },
  {
    quote_es:
      "Hasta un diminuto insecto tiene un alma, no destruyas la vida innecesariamente. -Shino Aburame",
    quote_en: "",
  },
  {
    quote_es:
      "Entrenar solo tiene sus límites, solo un rival es capaz de hacer que superemos esos límites. -Neji Hyuga.",
    quote_en: "",
  },
  {
    quote_es: "No hay mayor dolor que el causado por la soledad -Sasuke",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "When a man learns to love, he must bear the risk of hatred -Madara",
  },
  {
    quote_es: "Todas las verdades que son calladas se vuelven venenosas.",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en: "We suffer more often in imagination than in reality. -Seneca",
  },
  {
    quote_es: "",
    quote_en:
      "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation. -Oscar Wilde",
  },
  {
    quote_es: "",
    quote_en:
      "In ancient times, having power meant having access to information, today having power means knowing what to ignore.",
  },
  {
    quote_es:
      "El carácter está más determinado por la falta de experiencia que por aquellas que uno ha obtenido",
    quote_en: "",
  },
  {
    quote_es: "",
    quote_en:
      "If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.",
  },
  {
    quote_es: "",
    quote_en:
      "Humankind has not woven the web of life. We are but one thread within it. Whatever we do to the web, we do to ourselves. All things are bound together. All things connect. ~ Chief Seattle",
  },
  {
    quote_es: "",
    quote_en:
      "The journey is about being more deeply involved in life and yet less attached to it.",
  },
  {
    quote_es: "",
    quote_en:
      "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.",
  },
  {
    quote_es: "",
    quote_en:
      "I can accept failure; everyone fails at something. But I can't accept not trying.",
  },
  {
    quote_es: "",
    quote_en:
      "The most common way people give up their power is by thinking they don’t have any.”",
  },
  {
    quote_es: "",
    quote_en: "This is your life and it's ending one minute at a time.”",
  },
  {
    quote_es: "",
    quote_en:
      "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
  },
  {
    quote_es: "",
    quote_en:
      "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
  },
  {
    quote_es: "",
    quote_en:
      "Albert Einstein once said, 'Insanity is doing the same thing over and over and expecting a different result.",
  },
  {
    quote_es: "",
    quote_en:
      "Sometimes life is like a dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
  },
  {
    quote_es: "",
    quote_en:
      "The monks used to say that the revenge is like a 2-headed rapt viper, while you watch your enemy go down, you are being poisoned yourself. You do have a choice. Forgiveness. It’s easy to do nothing, but is hard to forgive.",
  },
  {
    quote_es: "",
    quote_en:
      "The true mind can weather all the lies and illusions without being lost, the true heart can tough the poison of hatred without being hard. Since beginning less time darkness thrived in the void, but always need to purify light.",
  },
  {
    quote_es: "",
    quote_en: "Stop learning, die young. -James Clear",
  },
  {
    quote_es: "",
    quote_en:
      "One of the great gift of sports is learning how to fail in public. - James Clear",
  },
  {
    quote_es: "",
    quote_en:
      "Someone with half your IQ is making 10x more as you because they aren't smart enough to doubt themselves.",
  },
  {
    quote_es: "",
    quote_en:
      "Any knowledge that doesn't lead to new questions quickly dies out: it fails to maintain the temperature required for sustaining life.",
  },
  {
    quote_es: "",
    quote_en: "The observant person finds many teachers. - James Clear",
  },
  {
    quote_es: "",
    quote_en:
      "The ultimate form of preparation is not planning for a specific scenario, but a mindset that can handle uncertainty. -James Clear",
  },
  {
    quote_es: "",
    quote_en:
      "It's not the load that breaks you down, it's the way you carry it. -Lena Horne",
  },
  {
    quote_es: "",
    quote_en:
      "Understanding a person's hunger and responding to it is one of the most potent tools you'll ever discover for getting through to anyone you meet in business or your personal life. -Mark Goulston",
  },
];

let RandomQuotes = () => {
  const [firstStage, setFirstStage] = useState(true);
  const [secondStage, setSecondStage] = useState(false);
  const [english, setEnglish] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [quote, setQuote] = useState("");
  let RNG;

  let toEnglish = () => {
    setFirstStage((prevShown) => !prevShown);
    setEnglish((prevShown) => !prevShown);
    setSecondStage((prevShown) => !prevShown);
  };

  let toSpanish = () => {
    setFirstStage((prevShown) => !prevShown);
    setSpanish((prevShown) => !prevShown);
    setSecondStage((prevShown) => !prevShown);
  };

  let changer = () => {
    RNG = Math.floor(Math.random() * quotes.length);
    console.log(quotes[RNG].quote_en);
    if (english) return setQuote(quotes[RNG].quote_en);
    if (spanish) return setQuote(quotes[RNG].quote_es);
  };

  return (
    <div className="QuoteGenerator">
      {firstStage && (
        <div className="language_btns">
          <button onClick={() => toEnglish()}>ENGLISH</button>
          <button onClick={() => toSpanish()}>SPANISH</button>
        </div>
      )}
      {secondStage && (
        <>
          <button onClick={() => changer()} className="RandomQuote">
            RANDOM QUOTE
          </button>
          <p className="Quote">"{quote}"</p>
        </>
      )}
    </div>
  );
};

export default RandomQuotes;
