/* ============================================================
   HarmonyHub — GCSE Music Theory question bank (Eduqas-aligned)
   Each topic has:
     flashcards: [{front, back}]            -> the "Learn" feature
     levels: [3]  (Foundation/Intermediate/Higher, 8 Qs each)
     exam:   {questions:[10]}  (mixed difficulty)
   Question: { q, options:[...], answer:<index>, explain }
   NB: option order is RANDOMISED at runtime (see app.js).
   ============================================================ */

const TOPICS = [

  /* ========================================================== */
  {
    id: "notes",
    title: "Note Names & Pitch",
    icon: "🎹",
    color: "linear-gradient(135deg,#5b9bff,#1453d6)",
    desc: "Read notes on the treble and bass clef, find middle C and name pitches.",
    flashcards: [
      { front: "Treble-clef LINES (bottom→top)", back: "E G B D F — 'Every Good Boy Deserves Football'." },
      { front: "Treble-clef SPACES (bottom→top)", back: "F A C E — they spell the word FACE." },
      { front: "Bass-clef LINES (bottom→top)", back: "G B D F A — 'Good Boys Deserve Football Always'." },
      { front: "Bass-clef SPACES (bottom→top)", back: "A C E G — 'All Cows Eat Grass'." },
      { front: "Other names for the clefs", back: "Treble = G clef (curls round the G line). Bass = F clef (two dots hug the F line)." },
      { front: "Where is Middle C?", back: "On a short ledger line just BELOW the treble staff and just ABOVE the bass staff — it links the two on the grand staff." },
      { front: "What are ledger lines?", back: "Short lines added above or below a staff to notate pitches that are too high or too low to fit." },
      { front: "How big is an octave?", back: "12 semitones. The two notes share the same letter name (e.g. C up to the next C)." }
    ],
    levels: [
      {
        id: "notes-1", title: "Foundation", desc: "Clefs and mnemonics.",
        questions: [
          { q: "What are the notes on the LINES of the treble clef, bottom to top?", options: ["E G B D F", "F A C E", "G B D F A", "A C E G"], answer: 0, explain: "Treble lines = <b>E G B D F</b>." },
          { q: "What word do the SPACES of the treble clef spell?", options: ["FACE", "BEAD", "GAGE", "DEAF"], answer: 0, explain: "The treble spaces spell <b>FACE</b>." },
          { q: "Another name for the treble clef is the…", options: ["G clef", "C clef", "F clef", "D clef"], answer: 0, explain: "The treble clef is the <b>G clef</b>." },
          { q: "The notes on the LINES of the bass clef, bottom to top, are…", options: ["G B D F A", "E G B D F", "A C E G", "F A C E"], answer: 0, explain: "Bass lines = <b>G B D F A</b>." },
          { q: "The SPACES of the bass clef spell…", options: ["A C E G", "FACE", "E G B D", "G B D F"], answer: 0, explain: "Bass spaces = <b>A C E G</b>." },
          { q: "Another name for the bass clef is the…", options: ["F clef", "G clef", "C clef", "Alto clef"], answer: 0, explain: "The bass clef is the <b>F clef</b>." },
          { q: "Higher-pitched instruments are usually notated in the…", options: ["Treble clef", "Bass clef", "Drum clef", "Tenor clef"], answer: 0, explain: "Higher pitches use the <b>treble clef</b>." },
          { q: "'All Cows Eat Grass' is a mnemonic for the…", options: ["Bass-clef spaces", "Treble-clef lines", "Bass-clef lines", "Treble-clef spaces"], answer: 0, explain: "It gives the <b>bass-clef spaces</b>: A C E G." }
        ]
      },
      {
        id: "notes-2", title: "Intermediate", desc: "Reading individual notes.",
        questions: [
          { q: "Which note sits on the bottom line of the treble clef?", options: ["E", "F", "G", "D"], answer: 0, explain: "Bottom line of the treble clef = <b>E</b>." },
          { q: "Which note sits in the top space of the treble clef?", options: ["E", "F", "G", "C"], answer: 0, explain: "FACE goes up F–A–C–E, so the top space is <b>E</b>." },
          { q: "Which note sits on the MIDDLE line of the treble clef?", options: ["B", "D", "G", "C"], answer: 0, explain: "EGBDF: the middle (3rd) line is <b>B</b>." },
          { q: "Which note sits on the top line of the bass clef?", options: ["A", "G", "F", "B"], answer: 0, explain: "GBDFA: the top line is <b>A</b>." },
          { q: "Which note sits on the bottom line of the bass clef?", options: ["G", "A", "F", "E"], answer: 0, explain: "GBDFA: the bottom line is <b>G</b>." },
          { q: "On a piano, the bass clef is usually played by the…", options: ["Left hand", "Right hand", "Both hands", "Neither hand"], answer: 0, explain: "Lower pitches → the <b>left hand</b>." },
          { q: "Middle C is written on a ledger line…", options: ["Below the treble staff / above the bass staff", "On the middle line of the treble clef", "Above the treble staff", "Below the bass staff"], answer: 0, explain: "It sits between the two staves on a ledger line." },
          { q: "Short lines used to extend the staff for very high/low notes are called…", options: ["Ledger lines", "Bar lines", "Stave lines", "Slur lines"], answer: 0, explain: "They are <b>ledger lines</b>." }
        ]
      },
      {
        id: "notes-3", title: "Higher", desc: "The grand staff and octaves.",
        questions: [
          { q: "How many semitones are there in one octave?", options: ["12", "8", "7", "6"], answer: 0, explain: "An octave = <b>12 semitones</b>." },
          { q: "Two notes an octave apart always share the same…", options: ["Letter name", "Clef", "Dynamic", "Duration"], answer: 0, explain: "They share the same <b>letter name</b> (e.g. C and C)." },
          { q: "Which note sits on the 3rd line (middle) of the bass clef?", options: ["D", "B", "F", "A"], answer: 0, explain: "GBDFA: line 3 is <b>D</b>." },
          { q: "The note on the FIRST ledger line above the treble staff is…", options: ["A", "G", "B", "C"], answer: 0, explain: "Top line = F, space above = G, first ledger line above = <b>A</b>." },
          { q: "The grand staff joins the treble and bass clefs with a…", options: ["Brace, with middle C between them", "Repeat sign", "Time signature", "Double bar"], answer: 0, explain: "A <b>brace</b> links them; middle C sits in the middle." },
          { q: "Which note sits in the 2nd space (from bottom) of the treble clef?", options: ["A", "F", "C", "E"], answer: 0, explain: "FACE: the 2nd space is <b>A</b>." },
          { q: "Middle C is how many ledger lines below the treble staff?", options: ["One", "Two", "Three", "None"], answer: 0, explain: "It sits on <b>one</b> ledger line below the treble staff." },
          { q: "A note written one octave above middle C is read most easily in the…", options: ["Treble clef", "Bass clef", "Either is equally easy", "Tenor clef"], answer: 0, explain: "Higher pitches sit comfortably in the <b>treble clef</b>." }
        ]
      }
    ],
    exam: { questions: [
      { q: "Treble-clef lines spell:", options: ["E G B D F", "F A C E", "G B D F A", "A C E G"], answer: 0, explain: "EGBDF." },
      { q: "Treble-clef spaces spell:", options: ["FACE", "BEAD", "GAGE", "ACEG"], answer: 0, explain: "FACE." },
      { q: "Bass-clef lines spell:", options: ["G B D F A", "E G B D F", "A C E G", "FACE"], answer: 0, explain: "GBDFA." },
      { q: "Bass-clef spaces spell:", options: ["A C E G", "FACE", "GBDF", "EGBD"], answer: 0, explain: "ACEG." },
      { q: "The treble clef is also the:", options: ["G clef", "F clef", "C clef", "D clef"], answer: 0, explain: "G clef." },
      { q: "The bass clef is also the:", options: ["F clef", "G clef", "C clef", "Alto clef"], answer: 0, explain: "F clef." },
      { q: "Bottom line of the treble clef:", options: ["E", "G", "F", "D"], answer: 0, explain: "E." },
      { q: "Top line of the bass clef:", options: ["A", "G", "F", "B"], answer: 0, explain: "A." },
      { q: "Semitones in an octave:", options: ["12", "8", "7", "6"], answer: 0, explain: "12." },
      { q: "Middle C sits on a ledger line below the:", options: ["Treble staff", "Bass staff bottom", "Drum staff", "It cannot be written"], answer: 0, explain: "Just below treble, just above bass." }
    ]}
  },

  /* ========================================================== */
  {
    id: "intervals",
    title: "Intervals",
    icon: "📏",
    color: "linear-gradient(135deg,#7c5bff,#3b1bb0)",
    desc: "Measure the distance between two notes — tones, semitones and named intervals.",
    flashcards: [
      { front: "Semitone vs tone", back: "A semitone is the smallest interval (one adjacent key). A tone = 2 semitones." },
      { front: "Natural semitones (white keys)", back: "E–F and B–C are semitones with no note between them." },
      { front: "How do you name an interval's NUMBER?", back: "Count letter names inclusively from the lower note. C up to G = C-D-E-F-G = a 5th." },
      { front: "Interval semitone counts", back: "m2=1, M2=2, m3=3, M3=4, P4=5, tritone=6, P5=7, m6=8, M6=9, m7=10, M7=11, octave=12." },
      { front: "Which intervals are 'perfect'?", back: "The unison, 4th, 5th and octave. 2nds, 3rds, 6ths and 7ths are major or minor." },
      { front: "The tritone", back: "An interval of 6 semitones (e.g. augmented 4th / diminished 5th) — historically the 'devil's interval'." },
      { front: "Compound intervals", back: "Intervals larger than an octave, e.g. a 9th = an octave + a 2nd." },
      { front: "Inverting an interval", back: "Turn it upside down: the number adds to 9 and quality flips (M↔m, aug↔dim). A major 3rd inverts to a minor 6th." }
    ],
    levels: [
      {
        id: "intervals-1", title: "Foundation", desc: "Tones, semitones and simple intervals.",
        questions: [
          { q: "A semitone is…", options: ["The smallest interval in Western music", "The same as an octave", "Three notes apart", "A type of chord"], answer: 0, explain: "The <b>smallest</b> standard interval — one adjacent key/fret." },
          { q: "How many semitones make a tone?", options: ["2", "1", "3", "12"], answer: 0, explain: "A tone = <b>2 semitones</b>." },
          { q: "From E to F is a…", options: ["Semitone", "Tone", "Major 3rd", "Tritone"], answer: 0, explain: "E–F is a natural <b>semitone</b>." },
          { q: "From B to C is a…", options: ["Semitone", "Tone", "Perfect 4th", "Minor 3rd"], answer: 0, explain: "B–C is a natural <b>semitone</b>." },
          { q: "From C to D is a…", options: ["Tone", "Semitone", "Perfect 5th", "Octave"], answer: 0, explain: "C–D skips C#, so it is a <b>tone</b>." },
          { q: "C up to G is which interval?", options: ["Perfect 5th", "Perfect 4th", "Major 3rd", "Octave"], answer: 0, explain: "C-D-E-F-G = a 5th; <b>perfect 5th</b>." },
          { q: "C up to E is which interval?", options: ["Major 3rd", "Minor 3rd", "Perfect 4th", "Major 2nd"], answer: 0, explain: "C-D-E = a 3rd; C–E is a <b>major 3rd</b>." },
          { q: "C up to the next C is an…", options: ["Octave", "Perfect 5th", "Major 7th", "Unison"], answer: 0, explain: "Same letter, 12 semitones up = an <b>octave</b>." }
        ]
      },
      {
        id: "intervals-2", title: "Intermediate", desc: "Naming number and quality.",
        questions: [
          { q: "C up to F is which interval?", options: ["Perfect 4th", "Perfect 5th", "Major 3rd", "Major 2nd"], answer: 0, explain: "C-D-E-F = a 4th; <b>perfect 4th</b> (5 semitones)." },
          { q: "A major 3rd contains how many semitones?", options: ["4", "3", "5", "7"], answer: 0, explain: "Major 3rd = <b>4 semitones</b>." },
          { q: "A minor 3rd contains how many semitones?", options: ["3", "4", "2", "5"], answer: 0, explain: "Minor 3rd = <b>3 semitones</b>." },
          { q: "C up to A is which interval?", options: ["Major 6th", "Major 7th", "Perfect 5th", "Minor 6th"], answer: 0, explain: "C-D-E-F-G-A = a 6th; C–A is a <b>major 6th</b>." },
          { q: "C up to B is which interval?", options: ["Major 7th", "Minor 7th", "Octave", "Major 6th"], answer: 0, explain: "C–B = a <b>major 7th</b> (11 semitones)." },
          { q: "Two notes of exactly the same pitch form a…", options: ["Unison", "Octave", "2nd", "Tritone"], answer: 0, explain: "Same pitch = <b>unison</b>." },
          { q: "A perfect 5th contains how many semitones?", options: ["7", "5", "6", "8"], answer: 0, explain: "Perfect 5th = <b>7 semitones</b>." },
          { q: "C up to D# (an augmented 2nd) is enharmonically the same size as a…", options: ["Minor 3rd", "Major 2nd", "Perfect 4th", "Major 3rd"], answer: 0, explain: "C–D# spans 3 semitones — the same size as a <b>minor 3rd</b>." }
        ]
      },
      {
        id: "intervals-3", title: "Higher", desc: "Tritones, compound intervals & inversion.",
        questions: [
          { q: "How many semitones are there in a tritone?", options: ["6", "5", "7", "4"], answer: 0, explain: "A tritone = <b>6 semitones</b> (three whole tones)." },
          { q: "A minor 7th contains how many semitones?", options: ["10", "11", "9", "8"], answer: 0, explain: "Minor 7th = <b>10 semitones</b>; a major 7th = 11." },
          { q: "An interval larger than an octave is called…", options: ["Compound", "Simple", "Perfect", "Diminished"], answer: 0, explain: "Intervals bigger than an octave are <b>compound</b>." },
          { q: "A 9th is equivalent to an octave plus a…", options: ["2nd", "3rd", "Unison", "4th"], answer: 0, explain: "9th = octave + a <b>2nd</b>." },
          { q: "When a major 3rd is inverted it becomes a…", options: ["Minor 6th", "Major 6th", "Minor 3rd", "Perfect 5th"], answer: 0, explain: "Inversion: 3→6 and major→minor, so a <b>minor 6th</b>." },
          { q: "When a perfect 4th is inverted it becomes a…", options: ["Perfect 5th", "Perfect 4th", "Major 3rd", "Minor 6th"], answer: 0, explain: "4→5 and perfect stays perfect = <b>perfect 5th</b>." },
          { q: "An augmented 4th and a diminished 5th both span…", options: ["6 semitones (a tritone)", "5 semitones", "7 semitones", "4 semitones"], answer: 0, explain: "Both equal the <b>tritone</b> (6 semitones)." },
          { q: "Notes sounded one after another form a ___ interval; notes sounded together form a ___ interval.", options: ["Melodic; harmonic", "Harmonic; melodic", "Compound; simple", "Major; minor"], answer: 0, explain: "Successive = <b>melodic</b>; together = <b>harmonic</b>." }
        ]
      }
    ],
    exam: { questions: [
      { q: "A tone = how many semitones?", options: ["2", "1", "3", "4"], answer: 0, explain: "2." },
      { q: "E to F is a:", options: ["Semitone", "Tone", "3rd", "Octave"], answer: 0, explain: "Semitone." },
      { q: "C to G is a:", options: ["Perfect 5th", "Perfect 4th", "Major 6th", "Octave"], answer: 0, explain: "Perfect 5th." },
      { q: "C to F is a:", options: ["Perfect 4th", "Perfect 5th", "Major 3rd", "2nd"], answer: 0, explain: "Perfect 4th." },
      { q: "Major 3rd semitones:", options: ["4", "3", "5", "2"], answer: 0, explain: "4." },
      { q: "Minor 3rd semitones:", options: ["3", "4", "2", "5"], answer: 0, explain: "3." },
      { q: "Tritone semitones:", options: ["6", "5", "7", "4"], answer: 0, explain: "6." },
      { q: "Minor 7th semitones:", options: ["10", "11", "9", "8"], answer: 0, explain: "10." },
      { q: "A major 3rd inverts to a:", options: ["Minor 6th", "Major 6th", "Minor 3rd", "P5"], answer: 0, explain: "Minor 6th." },
      { q: "A 9th = octave +:", options: ["2nd", "3rd", "Unison", "4th"], answer: 0, explain: "A 2nd." }
    ]}
  },

  /* ========================================================== */
  {
    id: "scales",
    title: "Major & Minor Scales",
    icon: "🎼",
    color: "linear-gradient(135deg,#2fd0c5,#0b8f86)",
    desc: "Scale patterns, relative minors and the three forms of the minor scale.",
    flashcards: [
      { front: "Major scale pattern", back: "T T S T T T S (tone/semitone). Works from any starting note." },
      { front: "Natural minor pattern", back: "T S T T S T T — uses only the notes of the key signature." },
      { front: "Harmonic minor", back: "Natural minor with a RAISED 7th (sharpened leading note). Creates an augmented 2nd between degrees 6 and 7." },
      { front: "Melodic minor", back: "Ascending: raise the 6th AND 7th. Descending: revert to the natural minor." },
      { front: "Relative minor", back: "Shares the SAME key signature as its major. It starts on the 6th degree — a minor 3rd below the major tonic. C major ↔ A minor." },
      { front: "Scale-degree names", back: "1 tonic, 2 supertonic, 3 mediant, 4 subdominant, 5 dominant, 6 submediant, 7 leading note." },
      { front: "Order of sharps / flats", back: "Sharps: F C G D A E B. Flats: B E A D G C F (reverse)." },
      { front: "Some key signatures", back: "C: none. G: 1♯ (F♯). D: 2♯ (F♯ C♯). F: 1♭ (B♭). B♭: 2♭ (B♭ E♭)." }
    ],
    levels: [
      {
        id: "scales-1", title: "Foundation", desc: "Major scales & basics.",
        questions: [
          { q: "The tone/semitone pattern of a MAJOR scale is:", options: ["T T S T T T S", "T S T T S T T", "S T T T S T T", "T T T S T T S"], answer: 0, explain: "<b>T T S T T T S</b>." },
          { q: "The C major scale contains…", options: ["No sharps or flats", "One sharp", "One flat", "Two sharps"], answer: 0, explain: "<b>No</b> sharps or flats." },
          { q: "The first note of a scale (the key note) is the…", options: ["Tonic", "Dominant", "Mediant", "Leading note"], answer: 0, explain: "Degree 1 = the <b>tonic</b>." },
          { q: "The 5th degree of a scale is called the…", options: ["Dominant", "Subdominant", "Mediant", "Leading note"], answer: 0, explain: "Degree 5 = <b>dominant</b>." },
          { q: "The relative minor of C major is…", options: ["A minor", "E minor", "G minor", "F minor"], answer: 0, explain: "<b>A minor</b> (a minor 3rd below C)." },
          { q: "How many sharps does G major have?", options: ["One (F♯)", "Two", "None", "One (C♯)"], answer: 0, explain: "G major has <b>one sharp, F♯</b>." },
          { q: "A natural minor scale uses the notes of…", options: ["Its key signature, unaltered", "A raised 7th", "A raised 6th and 7th", "A flattened 2nd"], answer: 0, explain: "Natural minor = key-signature notes, <b>unaltered</b>." },
          { q: "A natural minor contains no sharps or flats. Which key is it?", options: ["A minor", "E minor", "D minor", "G minor"], answer: 0, explain: "<b>A minor</b> — all white keys." }
        ]
      },
      {
        id: "scales-2", title: "Intermediate", desc: "Minor forms & relationships.",
        questions: [
          { q: "The 4th degree of a scale is called the…", options: ["Subdominant", "Dominant", "Tonic", "Supertonic"], answer: 0, explain: "Degree 4 = <b>subdominant</b>." },
          { q: "The HARMONIC minor scale raises which note?", options: ["The 7th", "The 2nd", "The 5th", "The 4th"], answer: 0, explain: "It sharpens the <b>7th</b> (leading note)." },
          { q: "The MELODIC minor (ascending) raises which two notes?", options: ["6th and 7th", "2nd and 3rd", "4th and 5th", "1st and 8th"], answer: 0, explain: "It raises the <b>6th and 7th</b> going up." },
          { q: "The tone/semitone pattern of a NATURAL minor is:", options: ["T S T T S T T", "T T S T T T S", "S T T S T T T", "T T S T S T T"], answer: 0, explain: "Natural minor = <b>T S T T S T T</b>." },
          { q: "A relative minor shares the major key's…", options: ["Key signature", "Tonic note", "Tempo", "Time signature"], answer: 0, explain: "They share the same <b>key signature</b>." },
          { q: "How many sharps does D major have?", options: ["Two (F♯, C♯)", "One", "Three", "None"], answer: 0, explain: "D major = <b>2 sharps</b>: F♯ and C♯." },
          { q: "The 7th degree, which 'leads' to the tonic, is the…", options: ["Leading note", "Submediant", "Mediant", "Supertonic"], answer: 0, explain: "Degree 7 = <b>leading note</b>." },
          { q: "How many flats does F major have?", options: ["One (B♭)", "Two", "None", "One (E♭)"], answer: 0, explain: "F major = <b>one flat, B♭</b>." }
        ]
      },
      {
        id: "scales-3", title: "Higher", desc: "Degree names, order of sharps & detail.",
        questions: [
          { q: "The order of sharps in key signatures is…", options: ["F C G D A E B", "B E A D G C F", "C D E F G A B", "G D A E B F C"], answer: 0, explain: "Sharps go <b>F C G D A E B</b>." },
          { q: "The order of flats is…", options: ["B E A D G C F", "F C G D A E B", "C F G D A E B", "A B C D E F G"], answer: 0, explain: "Flats go <b>B E A D G C F</b> (reverse of sharps)." },
          { q: "Scale degree 3 is called the…", options: ["Mediant", "Submediant", "Supertonic", "Dominant"], answer: 0, explain: "Degree 3 = <b>mediant</b>." },
          { q: "Scale degree 6 is called the…", options: ["Submediant", "Mediant", "Subdominant", "Leading note"], answer: 0, explain: "Degree 6 = <b>submediant</b>." },
          { q: "The relative minor begins on which degree of the major scale?", options: ["The 6th", "The 5th", "The 3rd", "The 2nd"], answer: 0, explain: "It starts on the <b>6th</b> degree (submediant)." },
          { q: "The harmonic minor's distinctive 'augmented 2nd' falls between degrees…", options: ["6 and 7", "2 and 3", "4 and 5", "1 and 2"], answer: 0, explain: "Raising the 7th creates an augmented 2nd between the <b>6th and 7th</b>." },
          { q: "A melodic minor scale DESCENDING is the same as the…", options: ["Natural minor", "Harmonic minor", "Major scale", "Chromatic scale"], answer: 0, explain: "Coming down it reverts to the <b>natural minor</b>." },
          { q: "Scale degree 2 is called the…", options: ["Supertonic", "Subdominant", "Submediant", "Mediant"], answer: 0, explain: "Degree 2 = <b>supertonic</b>." }
        ]
      }
    ],
    exam: { questions: [
      { q: "Major scale pattern:", options: ["T T S T T T S", "T S T T S T T", "S T T S T T T", "T T S T S T T"], answer: 0, explain: "TTSTTTS." },
      { q: "C major has:", options: ["No sharps/flats", "1 sharp", "1 flat", "2 sharps"], answer: 0, explain: "None." },
      { q: "Relative minor of C major:", options: ["A minor", "E minor", "D minor", "G minor"], answer: 0, explain: "A minor." },
      { q: "Harmonic minor raises the:", options: ["7th", "6th", "5th", "2nd"], answer: 0, explain: "7th." },
      { q: "Melodic minor (asc.) raises:", options: ["6th & 7th", "2nd & 3rd", "4th & 5th", "1st & 5th"], answer: 0, explain: "6th and 7th." },
      { q: "Scale degree 5:", options: ["Dominant", "Subdominant", "Mediant", "Tonic"], answer: 0, explain: "Dominant." },
      { q: "Scale degree 4:", options: ["Subdominant", "Dominant", "Leading note", "Tonic"], answer: 0, explain: "Subdominant." },
      { q: "Order of sharps:", options: ["F C G D A E B", "B E A D G C F", "C D E F G A B", "G D A E B"], answer: 0, explain: "FCGDAEB." },
      { q: "D major sharps:", options: ["F♯ C♯", "F♯ only", "F♯ C♯ G♯", "none"], answer: 0, explain: "Two sharps." },
      { q: "Relative minor begins on degree:", options: ["6", "5", "3", "2"], answer: 0, explain: "The 6th." }
    ]}
  },

  /* ========================================================== */
  {
    id: "triads",
    title: "Triads",
    icon: "△",
    color: "linear-gradient(135deg,#ff8f5b,#d6431b)",
    desc: "Build major, minor, diminished and augmented three-note chords.",
    flashcards: [
      { front: "What is a triad?", back: "A three-note chord built in 3rds: a root, a 3rd and a 5th." },
      { front: "Major triad", back: "Root + MAJOR 3rd + PERFECT 5th. e.g. C–E–G. Bright/happy." },
      { front: "Minor triad", back: "Root + MINOR 3rd + PERFECT 5th. e.g. A–C–E. Darker/sad." },
      { front: "Diminished triad", back: "Root + MINOR 3rd + DIMINISHED 5th. e.g. C–E♭–G♭. Tense/unstable." },
      { front: "Augmented triad", back: "Root + MAJOR 3rd + AUGMENTED 5th. e.g. C–E–G♯. Dreamy/unsettled." },
      { front: "What sets the quality?", back: "The 3rd decides major vs minor; the 5th then makes it diminished or augmented." },
      { front: "Primary triads", back: "Chords I, IV and V (tonic, subdominant, dominant) — the three most important chords in a key." },
      { front: "Triad qualities in a MAJOR key", back: "I, IV, V are major; ii, iii, vi are minor; vii° is diminished." }
    ],
    levels: [
      {
        id: "triads-1", title: "Foundation", desc: "Major & minor triads.",
        questions: [
          { q: "A triad is a chord of how many notes?", options: ["3", "2", "4", "5"], answer: 0, explain: "A triad = <b>3 notes</b>." },
          { q: "A MAJOR triad is built from…", options: ["Major 3rd + perfect 5th", "Minor 3rd + perfect 5th", "Major 3rd + augmented 5th", "Minor 3rd + diminished 5th"], answer: 0, explain: "Major triad = <b>M3 + P5</b>." },
          { q: "The C major triad is…", options: ["C E G", "C E♭ G", "C E G♯", "C E♭ G♭"], answer: 0, explain: "<b>C E G</b>." },
          { q: "A MINOR triad is built from…", options: ["Minor 3rd + perfect 5th", "Major 3rd + perfect 5th", "Minor 3rd + diminished 5th", "Major 3rd + augmented 5th"], answer: 0, explain: "Minor triad = <b>m3 + P5</b>." },
          { q: "The A minor triad is…", options: ["A C E", "A C♯ E", "A C E♯", "A C♭ E♭"], answer: 0, explain: "<b>A C E</b>." },
          { q: "The three notes of a triad are the root, the…", options: ["3rd and 5th", "2nd and 4th", "4th and 6th", "5th and 7th"], answer: 0, explain: "Root, <b>3rd and 5th</b>." },
          { q: "Which triad usually sounds bright and happy?", options: ["Major", "Diminished", "Minor", "Augmented"], answer: 0, explain: "<b>Major</b> triads sound bright." },
          { q: "A triad is built by stacking intervals of a…", options: ["3rd", "2nd", "4th", "5th"], answer: 0, explain: "Triads stack in <b>3rds</b>." }
        ]
      },
      {
        id: "triads-2", title: "Intermediate", desc: "Diminished & augmented.",
        questions: [
          { q: "A DIMINISHED triad is built from…", options: ["Minor 3rd + diminished 5th", "Major 3rd + perfect 5th", "Minor 3rd + perfect 5th", "Major 3rd + augmented 5th"], answer: 0, explain: "Diminished = <b>m3 + d5</b>." },
          { q: "The C diminished triad is…", options: ["C E♭ G♭", "C E G", "C E♭ G", "C E G♯"], answer: 0, explain: "<b>C E♭ G♭</b>." },
          { q: "An AUGMENTED triad is built from…", options: ["Major 3rd + augmented 5th", "Minor 3rd + perfect 5th", "Major 3rd + perfect 5th", "Minor 3rd + diminished 5th"], answer: 0, explain: "Augmented = <b>M3 + A5</b>." },
          { q: "The C augmented triad is…", options: ["C E G♯", "C E G", "C E♭ G♭", "C E♭ G"], answer: 0, explain: "<b>C E G♯</b>." },
          { q: "Which triad sounds the most tense/unstable?", options: ["Diminished", "Major", "Minor", "Perfect"], answer: 0, explain: "The <b>diminished</b> triad is most unstable." },
          { q: "How many semitones in an augmented 5th (root→5th)?", options: ["8", "7", "6", "9"], answer: 0, explain: "Augmented 5th = <b>8 semitones</b>." },
          { q: "How many semitones in a diminished 5th (root→5th)?", options: ["6", "7", "8", "5"], answer: 0, explain: "Diminished 5th = <b>6 semitones</b>." },
          { q: "The G minor triad is…", options: ["G B♭ D", "G B D", "G B♭ D♭", "G B D♯"], answer: 0, explain: "<b>G B♭ D</b> (minor 3rd above G is B♭)." }
        ]
      },
      {
        id: "triads-3", title: "Higher", desc: "Building & analysing triads in a key.",
        questions: [
          { q: "The G major triad is…", options: ["G B D", "G B♭ D", "G B D♯", "G A D"], answer: 0, explain: "<b>G B D</b>." },
          { q: "The D minor triad is…", options: ["D F A", "D F♯ A", "D F A♯", "D E A"], answer: 0, explain: "<b>D F A</b>." },
          { q: "The E major triad is…", options: ["E G♯ B", "E G B", "E G♯ B♭", "E G B♯"], answer: 0, explain: "<b>E G♯ B</b> (major 3rd above E is G♯)." },
          { q: "The primary triads (I, IV, V) in C major are…", options: ["C, F and G", "C, D and E", "C, E and G", "C, G and A"], answer: 0, explain: "I=C, IV=F, V=G." },
          { q: "In a major key, chords ii, iii and vi are…", options: ["Minor", "Major", "Diminished", "Augmented"], answer: 0, explain: "ii, iii, vi are <b>minor</b>." },
          { q: "In a major key, which chord is diminished?", options: ["vii°", "ii", "IV", "vi"], answer: 0, explain: "The chord on the leading note, <b>vii°</b>, is diminished." },
          { q: "Which two triads share the notes of an augmented chord because it is symmetrical? (C aug = C E G♯)", options: ["It divides the octave into equal major 3rds", "It is the same as a minor triad", "It contains a perfect 5th", "It cannot be inverted"], answer: 0, explain: "An augmented triad stacks two <b>major 3rds</b>, dividing the octave equally." },
          { q: "The B diminished triad is…", options: ["B D F", "B D♯ F♯", "B D F♯", "B D♯ F"], answer: 0, explain: "<b>B D F</b> (m3 = D, d5 = F)." }
        ]
      }
    ],
    exam: { questions: [
      { q: "Notes in a triad:", options: ["3", "2", "4", "5"], answer: 0, explain: "Three." },
      { q: "Major triad =", options: ["M3 + P5", "m3 + P5", "M3 + A5", "m3 + d5"], answer: 0, explain: "M3 + P5." },
      { q: "C major triad:", options: ["C E G", "C E♭ G", "C E G♯", "C E♭ G♭"], answer: 0, explain: "C E G." },
      { q: "Minor triad =", options: ["m3 + P5", "M3 + P5", "m3 + d5", "M3 + A5"], answer: 0, explain: "m3 + P5." },
      { q: "A minor triad:", options: ["A C E", "A C♯ E", "A C E♯", "A C♭ E"], answer: 0, explain: "A C E." },
      { q: "Diminished triad =", options: ["m3 + d5", "M3 + P5", "m3 + P5", "M3 + A5"], answer: 0, explain: "m3 + d5." },
      { q: "C augmented triad:", options: ["C E G♯", "C E G", "C E♭ G♭", "C E♭ G"], answer: 0, explain: "C E G♯." },
      { q: "Most unstable triad:", options: ["Diminished", "Major", "Minor", "Augmented"], answer: 0, explain: "Diminished." },
      { q: "G major triad:", options: ["G B D", "G B♭ D", "G B D♯", "G A D"], answer: 0, explain: "G B D." },
      { q: "Primary triads in C major:", options: ["C F G", "C D E", "C E G", "C G A"], answer: 0, explain: "I, IV, V = C, F, G." }
    ]}
  },

  /* ========================================================== */
  {
    id: "chordtones",
    title: "Root, Third & Fifth",
    icon: "🎯",
    color: "linear-gradient(135deg,#ff5b8f,#b01b5a)",
    desc: "Identify the chord tones that make up every triad.",
    flashcards: [
      { front: "The root", back: "The note a chord is built on and named after. In C major (C E G), C is the root." },
      { front: "The third", back: "The middle note, a 3rd above the root. It decides major (major 3rd) vs minor (minor 3rd)." },
      { front: "The fifth", back: "The top note, a 5th above the root. Usually a perfect 5th; it makes a chord diminished or augmented when altered." },
      { front: "Which tone sets the quality?", back: "The THIRD — major 3rd = major chord, minor 3rd = minor chord." },
      { front: "Power chord", back: "Just the root and fifth (no third), so it sounds neither major nor minor — common in rock." },
      { front: "Working backwards", back: "If you know one chord tone you can find the others: the root is a 3rd below the third, and a 5th below the fifth." },
      { front: "Doubling", back: "In four-part writing a note is doubled; the ROOT is most commonly doubled." }
    ],
    levels: [
      {
        id: "chordtones-1", title: "Foundation", desc: "Naming the tones.",
        questions: [
          { q: "The note a chord is built on and named after is the…", options: ["Root", "Third", "Fifth", "Seventh"], answer: 0, explain: "The <b>root</b>." },
          { q: "In C major (C E G), which note is the THIRD?", options: ["E", "C", "G", "B"], answer: 0, explain: "<b>E</b>." },
          { q: "In C major (C E G), which note is the FIFTH?", options: ["G", "C", "E", "A"], answer: 0, explain: "<b>G</b>." },
          { q: "The quality (major/minor) of a chord is decided by its…", options: ["Third", "Root", "Fifth", "Octave"], answer: 0, explain: "The <b>third</b>." },
          { q: "In G major (G B D), the root is…", options: ["G", "B", "D", "F♯"], answer: 0, explain: "The chord is named after its root, <b>G</b>." },
          { q: "A triad is made of the root, the third and the…", options: ["Fifth", "Fourth", "Sixth", "Seventh"], answer: 0, explain: "The <b>fifth</b>." },
          { q: "In C major (C E G), which note is the ROOT?", options: ["C", "E", "G", "F"], answer: 0, explain: "<b>C</b>." },
          { q: "The fifth of a triad is usually a ___ above the root.", options: ["Perfect 5th", "Major 3rd", "Minor 3rd", "Octave"], answer: 0, explain: "A <b>perfect 5th</b>." }
        ]
      },
      {
        id: "chordtones-2", title: "Intermediate", desc: "Spotting tones in different chords.",
        questions: [
          { q: "In F major (F A C), which note is the fifth?", options: ["C", "F", "A", "D"], answer: 0, explain: "<b>C</b>." },
          { q: "In D minor (D F A), which note is the third?", options: ["F", "D", "A", "C"], answer: 0, explain: "<b>F</b> (a minor 3rd above D)." },
          { q: "Removing the third leaves a 'power chord' made of…", options: ["Root and fifth", "Root and third", "Third and fifth", "Root and seventh"], answer: 0, explain: "<b>Root + fifth</b>." },
          { q: "The perfect fifth above C is…", options: ["G", "F", "A", "E"], answer: 0, explain: "<b>G</b>." },
          { q: "If E is the third of a MAJOR chord, the root is…", options: ["C", "G", "A", "E"], answer: 0, explain: "A major 3rd below E is <b>C</b>." },
          { q: "In G major (G B D), which note is the third?", options: ["B", "G", "D", "A"], answer: 0, explain: "<b>B</b>." },
          { q: "In A minor (A C E), which note is the fifth?", options: ["E", "A", "C", "G"], answer: 0, explain: "<b>E</b>." },
          { q: "A power chord sounds neither major nor minor because it has no…", options: ["Third", "Root", "Fifth", "Octave"], answer: 0, explain: "It lacks the <b>third</b>, which carries the quality." }
        ]
      },
      {
        id: "chordtones-3", title: "Higher", desc: "Chromatic chords, inversions & doubling.",
        questions: [
          { q: "In E major (E G♯ B), which note is the third?", options: ["G♯", "E", "B", "G"], answer: 0, explain: "<b>G♯</b> (major 3rd above E)." },
          { q: "In A major (A C♯ E), which note is the fifth?", options: ["E", "A", "C♯", "G♯"], answer: 0, explain: "<b>E</b>." },
          { q: "Even when a chord is inverted, it is still named after its…", options: ["Root", "Lowest note", "Highest note", "Third"], answer: 0, explain: "Always the <b>root</b>, wherever it sits." },
          { q: "In four-part (SATB) harmony, which chord tone is most often doubled?", options: ["The root", "The third", "The fifth", "The leading note"], answer: 0, explain: "The <b>root</b> is usually doubled." },
          { q: "If G is the fifth of a major chord, the root is…", options: ["C", "G", "E", "D"], answer: 0, explain: "A perfect 5th below G is <b>C</b>." },
          { q: "A seventh is added a 7th above which chord tone?", options: ["The root", "The third", "The fifth", "The octave"], answer: 0, explain: "The 7th is measured above the <b>root</b>." },
          { q: "In B♭ major (B♭ D F), which note is the third?", options: ["D", "B♭", "F", "A"], answer: 0, explain: "<b>D</b>." },
          { q: "Which chord tone is usually OMITTED first in a dense voicing or 7th chord?", options: ["The fifth", "The root", "The third", "The seventh"], answer: 0, explain: "The <b>fifth</b> is the least essential and is dropped first." }
        ]
      }
    ],
    exam: { questions: [
      { q: "Note that names a chord:", options: ["Root", "Third", "Fifth", "Seventh"], answer: 0, explain: "Root." },
      { q: "Third of C major (C E G):", options: ["E", "C", "G", "B"], answer: 0, explain: "E." },
      { q: "Fifth of C major:", options: ["G", "C", "E", "A"], answer: 0, explain: "G." },
      { q: "Decides major vs minor:", options: ["Third", "Root", "Fifth", "Octave"], answer: 0, explain: "Third." },
      { q: "Fifth of F major (F A C):", options: ["C", "F", "A", "G"], answer: 0, explain: "C." },
      { q: "Third of D minor (D F A):", options: ["F", "D", "A", "C"], answer: 0, explain: "F." },
      { q: "Power chord =", options: ["Root + fifth", "Root + third", "Third + fifth", "Root + 7th"], answer: 0, explain: "Root and fifth." },
      { q: "Third of E major (E G♯ B):", options: ["G♯", "E", "B", "G"], answer: 0, explain: "G♯." },
      { q: "Most-doubled tone in SATB:", options: ["Root", "Third", "Fifth", "Leading note"], answer: 0, explain: "Root." },
      { q: "If E is the third of a major chord, root =", options: ["C", "G", "A", "E"], answer: 0, explain: "C." }
    ]}
  },

  /* ========================================================== */
  {
    id: "inversions",
    title: "Chord Inversions",
    icon: "🔁",
    color: "linear-gradient(135deg,#5bd0ff,#0b6fb8)",
    desc: "Root position, first and second inversion, and figured-bass symbols.",
    flashcards: [
      { front: "Root position", back: "The ROOT is the lowest (bass) note. Figured bass 5/3 (usually left blank). Roman-numeral suffix 'a'." },
      { front: "First inversion", back: "The THIRD is in the bass. Figured bass 6 (short for 6/3). Suffix 'b' (e.g. Vb)." },
      { front: "Second inversion", back: "The FIFTH is in the bass. Figured bass 6/4. Suffix 'c' (e.g. Ic)." },
      { front: "Why use inversions?", back: "They create smoother, more stepwise bass lines and better voice-leading between chords." },
      { front: "Cadential 6-4", back: "A common Ic–V(–I) progression where the second-inversion tonic decorates the dominant at a cadence." },
      { front: "Seventh-chord inversions", back: "A 7th chord has FOUR positions, including a third inversion with the 7th in the bass (figured 4/2)." },
      { front: "Example: C major", back: "Root: C–E–G. 1st inv: E–G–C (E in bass). 2nd inv: G–C–E (G in bass)." }
    ],
    levels: [
      {
        id: "inv-1", title: "Foundation", desc: "Which tone is in the bass.",
        questions: [
          { q: "In FIRST inversion, which chord tone is in the bass?", options: ["Third", "Root", "Fifth", "Seventh"], answer: 0, explain: "The <b>third</b>." },
          { q: "In SECOND inversion, which chord tone is in the bass?", options: ["Fifth", "Root", "Third", "Seventh"], answer: 0, explain: "The <b>fifth</b>." },
          { q: "In ROOT position, which chord tone is in the bass?", options: ["Root", "Third", "Fifth", "Any note"], answer: 0, explain: "The <b>root</b>." },
          { q: "C major in first inversion has which note in the bass?", options: ["E", "C", "G", "B"], answer: 0, explain: "The third, <b>E</b>." },
          { q: "C major in second inversion has which note in the bass?", options: ["G", "C", "E", "A"], answer: 0, explain: "The fifth, <b>G</b>." },
          { q: "An inversion changes which note is…", options: ["The lowest (in the bass)", "The root", "The highest always", "Removed"], answer: 0, explain: "It changes the <b>bass</b> note." },
          { q: "If C is in the bass of a C major chord, it is in…", options: ["Root position", "First inversion", "Second inversion", "No position"], answer: 0, explain: "Root in the bass = <b>root position</b>." },
          { q: "Inverting a chord changes its bass note but not its…", options: ["Name / root", "Pitch class set is irrelevant", "Key", "Clef"], answer: 0, explain: "It keeps the same <b>name and root</b>." }
        ]
      },
      {
        id: "inv-2", title: "Intermediate", desc: "Figured bass & Roman numerals.",
        questions: [
          { q: "The figured-bass symbol for FIRST inversion is…", options: ["6 (or 6/3)", "6/4", "5/3", "7"], answer: 0, explain: "First inversion = <b>6</b>." },
          { q: "The figured-bass symbol for SECOND inversion is…", options: ["6/4", "6", "5/3", "7"], answer: 0, explain: "Second inversion = <b>6/4</b>." },
          { q: "Root position is shown by the figures…", options: ["5/3 (usually blank)", "6", "6/4", "4/2"], answer: 0, explain: "Root position = <b>5/3</b>." },
          { q: "The Roman-numeral suffix 'b' (e.g. Vb) means…", options: ["First inversion", "Second inversion", "Root position", "A 7th chord"], answer: 0, explain: "'b' = <b>first inversion</b>." },
          { q: "'Ic' means chord I in…", options: ["Second inversion", "First inversion", "Root position", "Third inversion"], answer: 0, explain: "'c' = <b>second inversion</b>." },
          { q: "Why are inversions used?", options: ["For smoother bass lines / voice leading", "To make a chord louder", "To change key", "To remove the third"], answer: 0, explain: "For <b>smoother bass lines</b>." },
          { q: "The suffix 'a' (e.g. Va) means…", options: ["Root position", "First inversion", "Second inversion", "Added 7th"], answer: 0, explain: "'a' = <b>root position</b>." },
          { q: "G major (G B D) in first inversion has which note in the bass?", options: ["B", "G", "D", "A"], answer: 0, explain: "The third, <b>B</b>." }
        ]
      },
      {
        id: "inv-3", title: "Higher", desc: "Cadential 6-4 and 7th-chord inversions.",
        questions: [
          { q: "A 'cadential 6-4' is the progression…", options: ["Ic – V (often – I)", "IV – I", "V – vi", "ii – V"], answer: 0, explain: "A second-inversion tonic decorating the dominant: <b>Ic–V</b>." },
          { q: "A seventh chord has how many possible positions (incl. inversions)?", options: ["Four", "Three", "Two", "Five"], answer: 0, explain: "Root + 3 inversions = <b>four</b>." },
          { q: "In THIRD inversion of a 7th chord, which note is in the bass?", options: ["The seventh", "The fifth", "The third", "The root"], answer: 0, explain: "The <b>7th</b> is in the bass (figured 4/2)." },
          { q: "The figured bass for a third-inversion 7th chord is…", options: ["4/2", "6/4", "6/5", "5/3"], answer: 0, explain: "Third inversion 7th = <b>4/2</b>." },
          { q: "Second-inversion chords are used sparingly because they sound…", options: ["Less stable", "Too loud", "Out of tune", "Major"], answer: 0, explain: "The 4th above the bass makes 6/4 chords feel <b>unstable</b>." },
          { q: "The full figured bass for first inversion (rarely written in full) is…", options: ["6/3", "5/3", "6/4", "4/2"], answer: 0, explain: "First inversion = 6/3, usually shortened to <b>6</b>." },
          { q: "A 'passing 6-4' typically appears…", options: ["Between a root-position chord and its first inversion", "At the start of a piece", "Only in minor keys", "Only on a 7th chord"], answer: 0, explain: "It smooths a bass line passing between two positions of a chord." },
          { q: "If the fifth of a C major chord (G) is in the bass, the chord is labelled…", options: ["Ic (second inversion)", "Ib (first inversion)", "Ia (root)", "V"], answer: 0, explain: "Fifth in bass = second inversion = <b>Ic</b>." }
        ]
      }
    ],
    exam: { questions: [
      { q: "1st inversion bass note:", options: ["Third", "Root", "Fifth", "Seventh"], answer: 0, explain: "Third." },
      { q: "2nd inversion bass note:", options: ["Fifth", "Root", "Third", "Seventh"], answer: 0, explain: "Fifth." },
      { q: "C major 1st inversion bass:", options: ["E", "C", "G", "B"], answer: 0, explain: "E." },
      { q: "C major 2nd inversion bass:", options: ["G", "C", "E", "A"], answer: 0, explain: "G." },
      { q: "Figured bass, 1st inversion:", options: ["6", "6/4", "5/3", "7"], answer: 0, explain: "6." },
      { q: "Figured bass, 2nd inversion:", options: ["6/4", "6", "5/3", "4/2"], answer: 0, explain: "6/4." },
      { q: "'Vb' = chord V in:", options: ["1st inversion", "2nd inversion", "Root position", "7th"], answer: 0, explain: "First inversion." },
      { q: "Cadential 6-4:", options: ["Ic – V", "IV – I", "V – vi", "ii – V"], answer: 0, explain: "Ic–V." },
      { q: "3rd-inversion 7th bass note:", options: ["Seventh", "Fifth", "Third", "Root"], answer: 0, explain: "The 7th." },
      { q: "Inversions mainly help with:", options: ["Smoother bass lines", "Louder chords", "Key changes", "Removing thirds"], answer: 0, explain: "Voice leading." }
    ]}
  },

  /* ========================================================== */
  {
    id: "arpeggios",
    title: "Arpeggios",
    icon: "🌊",
    color: "linear-gradient(135deg,#9b8bff,#5b3bd6)",
    desc: "Broken chords — playing chord notes one after another.",
    flashcards: [
      { front: "What is an arpeggio?", back: "A 'broken chord' — the notes of a chord played one after another instead of together." },
      { front: "Where does the word come from?", back: "Italian 'arpeggiare' = to play like a harp, where the strings sound one after another." },
      { front: "Arpeggio vs scale", back: "An arpeggio LEAPS between chord tones (root, 3rd, 5th…); a scale moves stepwise through every note." },
      { front: "Rolled / spread chord", back: "A chord played quickly bottom-to-top so the notes ring out separately; marked with a wavy vertical line." },
      { front: "Alberti bass", back: "A Classical-era broken-chord accompaniment in the pattern low–high–middle–high (e.g. C–G–E–G)." },
      { front: "Building one", back: "Use exactly the notes of the chord: C major arpeggio = C–E–G (–C). G major = G–B–D." },
      { front: "Dominant 7th arpeggio", back: "Adds the 7th: G7 arpeggio = G–B–D–F." }
    ],
    levels: [
      {
        id: "arp-1", title: "Foundation", desc: "What an arpeggio is.",
        questions: [
          { q: "An arpeggio is…", options: ["The notes of a chord played one after another", "All chord notes played together", "A fast scale", "A type of rest"], answer: 0, explain: "A <b>broken chord</b> played in sequence." },
          { q: "Another name for an arpeggio is a…", options: ["Broken chord", "Cadence", "Triad", "Interval"], answer: 0, explain: "<b>Broken chord</b>." },
          { q: "A C major arpeggio (one octave up) is…", options: ["C E G C", "C D E F", "C E G B", "C E♭ G C"], answer: 0, explain: "<b>C E G</b> then C." },
          { q: "An arpeggio uses the same notes as the…", options: ["Chord it is based on", "Whole scale", "Blues scale", "Key signature"], answer: 0, explain: "The <b>notes of its chord</b>." },
          { q: "'Arpeggio' comes from the Italian for…", options: ["To play like a harp", "Fast", "Loud", "Together"], answer: 0, explain: "Play like a <b>harp</b>." },
          { q: "A G major arpeggio uses which notes?", options: ["G B D", "G B♭ D", "G B D F", "G A B C"], answer: 0, explain: "<b>G B D</b>." },
          { q: "Playing a chord's notes together (not in sequence) is NOT an arpeggio; it is a…", options: ["Block chord", "Broken chord", "Scale", "Riff"], answer: 0, explain: "A <b>block chord</b>." },
          { q: "An A minor arpeggio uses which notes?", options: ["A C E", "A C♯ E", "A C E G", "A B C D"], answer: 0, explain: "<b>A C E</b>." }
        ]
      },
      {
        id: "arp-2", title: "Intermediate", desc: "Building arpeggios & textures.",
        questions: [
          { q: "An arpeggio differs from a scale because it…", options: ["Skips notes (uses chord tones only)", "Uses every note in order", "Is always descending", "Has no rhythm"], answer: 0, explain: "It <b>leaps</b> between chord tones." },
          { q: "A D major arpeggio uses…", options: ["D F♯ A", "D F A", "D F♯ A C", "D E F♯ G"], answer: 0, explain: "<b>D F♯ A</b>." },
          { q: "A broken-chord accompaniment from the Classical era is called…", options: ["Alberti bass", "Plainchant", "Atonal", "A drum fill"], answer: 0, explain: "<b>Alberti bass</b>." },
          { q: "A chord played quickly from bottom to top, notes ringing on, is a…", options: ["Rolled (spread) chord", "Tremolo", "Glissando", "Trill"], answer: 0, explain: "A <b>rolled/spread chord</b>." },
          { q: "An E minor arpeggio uses…", options: ["E G B", "E G♯ B", "E G B D", "E F♯ G A"], answer: 0, explain: "<b>E G B</b>." },
          { q: "A rolled chord is usually shown by a…", options: ["Wavy vertical line", "Dot", "Slur", "Sharp sign"], answer: 0, explain: "A <b>wavy vertical line</b>." },
          { q: "An F major arpeggio uses…", options: ["F A C", "F A♭ C", "F A C E", "F G A B"], answer: 0, explain: "<b>F A C</b>." },
          { q: "Continuing a C major arpeggio above the octave repeats which tones?", options: ["The same chord tones (C E G…)", "A scale", "The blues scale", "Random notes"], answer: 0, explain: "It repeats <b>C E G</b> in the next octave." }
        ]
      },
      {
        id: "arp-3", title: "Higher", desc: "Seventh-chord & patterned arpeggios.",
        questions: [
          { q: "A dominant 7th arpeggio on G (G7) uses which notes?", options: ["G B D F", "G B D", "G B♭ D F", "G B D F♯"], answer: 0, explain: "G7 = <b>G B D F</b>." },
          { q: "The typical Alberti-bass pattern (over one chord) is…", options: ["Low – high – middle – high", "Low – middle – high – low", "All notes together", "High – low – high – low"], answer: 0, explain: "Alberti bass = <b>low–high–middle–high</b>." },
          { q: "A C major 7th arpeggio (Cmaj7) uses…", options: ["C E G B", "C E G B♭", "C E♭ G B♭", "C E G"], answer: 0, explain: "Cmaj7 = <b>C E G B</b>." },
          { q: "A descending C major arpeggio is…", options: ["C G E C", "C E G C", "C D E F", "C B A G"], answer: 0, explain: "Same notes, top-down: <b>C G E C</b>." },
          { q: "An arpeggiated accompaniment is common in which textures?", options: ["Homophonic accompaniment patterns", "Monophonic chant", "Pure unison", "Spoken word"], answer: 0, explain: "It supports a melody as <b>homophonic</b> accompaniment." },
          { q: "A B♭ major arpeggio uses…", options: ["B♭ D F", "B♭ D♭ F", "B♭ D F A", "B♭ C D E"], answer: 0, explain: "<b>B♭ D F</b>." },
          { q: "A C minor 7th arpeggio (Cm7) uses…", options: ["C E♭ G B♭", "C E G B", "C E♭ G B", "C E G B♭"], answer: 0, explain: "Cm7 = <b>C E♭ G B♭</b>." },
          { q: "A harp or guitar 'arpeggiated' figure mainly serves to…", options: ["Outline the harmony melodically", "Replace the melody", "Set the key signature", "Mark the tempo"], answer: 0, explain: "It <b>outlines the harmony</b> note by note." }
        ]
      }
    ],
    exam: { questions: [
      { q: "An arpeggio is:", options: ["Chord notes one after another", "Chord notes together", "A fast scale", "A rest"], answer: 0, explain: "Broken chord." },
      { q: "Another name for arpeggio:", options: ["Broken chord", "Cadence", "Triad", "Interval"], answer: 0, explain: "Broken chord." },
      { q: "C major arpeggio:", options: ["C E G (C)", "C D E F", "C E G B", "C E♭ G"], answer: 0, explain: "C E G." },
      { q: "G major arpeggio:", options: ["G B D", "G B♭ D", "G B D F", "G A B"], answer: 0, explain: "G B D." },
      { q: "A minor arpeggio:", options: ["A C E", "A C♯ E", "A C E G", "A B C"], answer: 0, explain: "A C E." },
      { q: "D major arpeggio:", options: ["D F♯ A", "D F A", "D F♯ A C", "D E F♯"], answer: 0, explain: "D F♯ A." },
      { q: "Arpeggio vs scale: arpeggio…", options: ["Uses chord tones only", "Uses every note", "Always descends", "Has no pitch"], answer: 0, explain: "Chord tones only." },
      { q: "Classical broken-chord accompaniment:", options: ["Alberti bass", "Plainchant", "Walking bass", "Ostinato"], answer: 0, explain: "Alberti bass." },
      { q: "G7 arpeggio:", options: ["G B D F", "G B D", "G B♭ D F", "G B D F♯"], answer: 0, explain: "G B D F." },
      { q: "A quickly spread chord is a:", options: ["Rolled chord", "Tremolo", "Trill", "Glissando"], answer: 0, explain: "Rolled/spread chord." }
    ]}
  },

  /* ========================================================== */
  {
    id: "sevenths",
    title: "Seventh Chords",
    icon: "7️⃣",
    color: "linear-gradient(135deg,#ffbf3b,#d68a00)",
    desc: "Add a seventh to a triad — dominant 7th, major 7th and minor 7th.",
    flashcards: [
      { front: "What is a 7th chord?", back: "A four-note chord: a triad PLUS a note a 7th above the root (root, 3rd, 5th, 7th)." },
      { front: "Dominant 7th", back: "Major triad + a MINOR 7th. Built on the dominant (V). e.g. G7 = G–B–D–F. Strong pull to the tonic." },
      { front: "Major 7th", back: "Major triad + a MAJOR 7th. e.g. Cmaj7 = C–E–G–B. Smooth, jazzy, mellow." },
      { front: "Minor 7th", back: "Minor triad + a minor 7th. e.g. Cm7 = C–E♭–G–B♭. Soft, mellow." },
      { front: "7th interval sizes", back: "Minor 7th = 10 semitones. Major 7th = 11 semitones." },
      { front: "Diminished 7th", back: "A stack of three minor 3rds (e.g. C–E♭–G♭–B♭♭). Very tense and symmetrical." },
      { front: "Where are they used?", back: "Everywhere — but especially in jazz and blues, which build their sound on 7th chords." }
    ],
    levels: [
      {
        id: "sev-1", title: "Foundation", desc: "Building 7th chords.",
        questions: [
          { q: "A seventh chord is a triad PLUS…", options: ["A seventh above the root", "A second above the root", "Another fifth", "An octave"], answer: 0, explain: "Triad + a <b>7th above the root</b>." },
          { q: "How many notes are in a seventh chord?", options: ["4", "3", "5", "2"], answer: 0, explain: "<b>Four</b>." },
          { q: "A DOMINANT 7th = major triad + a…", options: ["Minor 7th", "Major 7th", "Perfect 5th", "Diminished 5th"], answer: 0, explain: "Major triad + <b>minor 7th</b>." },
          { q: "The chord C7 (dominant 7th) contains…", options: ["C E G B♭", "C E G B", "C E♭ G B♭", "C E G A"], answer: 0, explain: "<b>C E G B♭</b>." },
          { q: "A dominant 7th is usually built on which scale degree?", options: ["The 5th (dominant)", "The 1st (tonic)", "The 4th (subdominant)", "The 2nd"], answer: 0, explain: "On the <b>dominant (V)</b>." },
          { q: "The four tones of a 7th chord are root, third, fifth and…", options: ["Seventh", "Sixth", "Octave", "Second"], answer: 0, explain: "The <b>seventh</b>." },
          { q: "Which genres rely heavily on 7th chords?", options: ["Jazz & blues", "Plainchant", "Marches", "Nursery rhymes"], answer: 0, explain: "<b>Jazz and blues</b>." },
          { q: "A 7th chord is built by stacking how many 3rds above the root?", options: ["Three", "Two", "Four", "One"], answer: 0, explain: "Three stacked 3rds give root-3rd-5th-7th." }
        ]
      },
      {
        id: "sev-2", title: "Intermediate", desc: "Major, minor & comparing 7ths.",
        questions: [
          { q: "A MAJOR 7th chord = major triad + a…", options: ["Major 7th", "Minor 7th", "Diminished 7th", "Perfect 5th"], answer: 0, explain: "Major triad + <b>major 7th</b>." },
          { q: "Cmaj7 contains…", options: ["C E G B", "C E G B♭", "C E♭ G B♭", "C E G A"], answer: 0, explain: "<b>C E G B</b> (natural B)." },
          { q: "A MINOR 7th chord = minor triad + a…", options: ["Minor 7th", "Major 7th", "Augmented 7th", "Perfect 4th"], answer: 0, explain: "Minor triad + <b>minor 7th</b>." },
          { q: "Cm7 contains…", options: ["C E♭ G B♭", "C E G B", "C E G B♭", "C E♭ G B"], answer: 0, explain: "<b>C E♭ G B♭</b>." },
          { q: "Which seventh chord most strongly wants to resolve to the tonic?", options: ["Dominant 7th", "Major 7th", "Minor 7th", "None"], answer: 0, explain: "The <b>dominant 7th</b>." },
          { q: "G7 (dominant 7th on G) contains…", options: ["G B D F", "G B D F♯", "G B♭ D F", "G B D E"], answer: 0, explain: "<b>G B D F</b>." },
          { q: "In C major, the dominant 7th chord is…", options: ["G7", "C7", "F7", "D7"], answer: 0, explain: "V7 in C major = <b>G7</b>." },
          { q: "Compared with a plain triad, a 7th chord sounds…", options: ["Richer / more tense", "Quieter", "Out of tune", "Exactly the same"], answer: 0, explain: "The added 7th makes it <b>richer/more tense</b>." }
        ]
      },
      {
        id: "sev-3", title: "Higher", desc: "Intervals, diminished & half-diminished.",
        questions: [
          { q: "The interval from root to 7th in a DOMINANT 7th is…", options: ["A minor 7th (10 semitones)", "A major 7th (11)", "An octave (12)", "A 6th (9)"], answer: 0, explain: "<b>Minor 7th = 10 semitones</b>." },
          { q: "The interval from root to 7th in a MAJOR 7th chord is…", options: ["11 semitones", "10 semitones", "12 semitones", "9 semitones"], answer: 0, explain: "Major 7th = <b>11 semitones</b>." },
          { q: "A DIMINISHED 7th chord is built from…", options: ["A stack of minor 3rds", "A stack of major 3rds", "Perfect 4ths", "Whole tones"], answer: 0, explain: "Three stacked <b>minor 3rds</b>." },
          { q: "A half-diminished 7th chord is also written as…", options: ["m7♭5", "maj7", "7sus4", "add9"], answer: 0, explain: "Half-diminished = <b>m7♭5</b> (diminished triad + minor 7th)." },
          { q: "A dominant 7th gets much of its pull from the tritone between its…", options: ["3rd and 7th", "Root and 5th", "Root and 3rd", "5th and 7th"], answer: 0, explain: "The <b>3rd and 7th</b> form a tritone that resolves inwards/outwards." },
          { q: "D7 (dominant 7th on D) contains…", options: ["D F♯ A C", "D F A C", "D F♯ A C♯", "D F♯ A B"], answer: 0, explain: "<b>D F♯ A C</b>." },
          { q: "In a perfect cadence the dominant 7th typically resolves to chord…", options: ["I (tonic)", "IV", "vi", "ii"], answer: 0, explain: "V7 resolves to <b>I</b>." },
          { q: "Am7 (minor 7th on A) contains…", options: ["A C E G", "A C♯ E G", "A C E G♯", "A C E F♯"], answer: 0, explain: "<b>A C E G</b>." }
        ]
      }
    ],
    exam: { questions: [
      { q: "A 7th chord has how many notes:", options: ["4", "3", "5", "2"], answer: 0, explain: "Four." },
      { q: "Dominant 7th = major triad +", options: ["Minor 7th", "Major 7th", "Perfect 5th", "Dim 5th"], answer: 0, explain: "Minor 7th." },
      { q: "C7 =", options: ["C E G B♭", "C E G B", "C E♭ G B♭", "C E G A"], answer: 0, explain: "C E G B♭." },
      { q: "Major 7th chord = major triad +", options: ["Major 7th", "Minor 7th", "Dim 7th", "Perfect 4th"], answer: 0, explain: "Major 7th." },
      { q: "Cmaj7 =", options: ["C E G B", "C E G B♭", "C E♭ G B♭", "C E G A"], answer: 0, explain: "C E G B." },
      { q: "Minor 7th chord = minor triad +", options: ["Minor 7th", "Major 7th", "Aug 7th", "Perfect 4th"], answer: 0, explain: "Minor 7th." },
      { q: "Dominant 7th built on degree:", options: ["5 (dominant)", "1 (tonic)", "4 (subdominant)", "2"], answer: 0, explain: "The dominant." },
      { q: "Minor 7th interval semitones:", options: ["10", "11", "9", "12"], answer: 0, explain: "10." },
      { q: "Diminished 7th = stack of:", options: ["Minor 3rds", "Major 3rds", "Perfect 4ths", "Whole tones"], answer: 0, explain: "Minor 3rds." },
      { q: "V7 in C major:", options: ["G7", "C7", "F7", "D7"], answer: 0, explain: "G7." }
    ]}
  },

  /* ========================================================== */
  {
    id: "blues",
    title: "The Blues Scale",
    icon: "🎸",
    color: "linear-gradient(135deg,#2f3b66,#0a1633)",
    desc: "The six-note blues scale, blue notes and the 12-bar blues.",
    flashcards: [
      { front: "The blues scale", back: "Six notes: the minor pentatonic PLUS a flattened 5th (the extra 'blue note'). Formula: 1 ♭3 4 ♭5 5 ♭7." },
      { front: "C blues scale", back: "C – E♭ – F – G♭ – G – B♭ (– C)." },
      { front: "Minor pentatonic", back: "A five-note scale: 1 ♭3 4 5 ♭7 (e.g. C E♭ F G B♭). The blues scale adds the ♭5." },
      { front: "Blue notes", back: "The flattened 3rd, 5th and 7th — slightly 'bent' pitches that give blues its expressive, soulful clash." },
      { front: "12-bar blues", back: "A repeating 12-bar chord pattern using chords I, IV and V, usually as dominant 7ths." },
      { front: "I–IV–V in C", back: "I = C, IV = F, V = G. Often played as C7, F7, G7." },
      { front: "Blues features", back: "Swung/shuffle rhythm, call-and-response, note bending, and a walking-bass or riff underneath." }
    ],
    levels: [
      {
        id: "blues-1", title: "Foundation", desc: "Building the blues scale.",
        questions: [
          { q: "The blues scale has how many different notes (excluding the octave)?", options: ["6", "5", "7", "8"], answer: 0, explain: "<b>Six</b> notes." },
          { q: "The blues scale is the minor pentatonic plus which added note?", options: ["The flattened 5th (♭5)", "The major 3rd", "The major 7th", "The 6th"], answer: 0, explain: "The <b>♭5</b> blue note." },
          { q: "The C blues scale is…", options: ["C E♭ F G♭ G B♭", "C D E F G A", "C E G B♭", "C E♭ G B♭"], answer: 0, explain: "<b>C E♭ F G♭ G B♭</b>." },
          { q: "The scale-degree formula for the blues scale is…", options: ["1 ♭3 4 ♭5 5 ♭7", "1 2 3 4 5 6", "1 3 5 7", "1 ♭2 3 5 ♭7"], answer: 0, explain: "<b>1 ♭3 4 ♭5 5 ♭7</b>." },
          { q: "The expressive 'bent' notes in blues are called…", options: ["Blue notes", "Grace notes", "Passing notes", "Pedal notes"], answer: 0, explain: "<b>Blue notes</b>." },
          { q: "A blues scale generally sounds…", options: ["Expressive and slightly clashing", "Bright and cheerful", "Silent", "Like a march"], answer: 0, explain: "<b>Expressive/soulful</b>." },
          { q: "The blues scale is based on which pentatonic scale?", options: ["Minor pentatonic", "Major pentatonic", "Whole-tone", "Chromatic"], answer: 0, explain: "The <b>minor pentatonic</b>." },
          { q: "How many notes does the minor pentatonic have?", options: ["5", "6", "7", "8"], answer: 0, explain: "<b>Five</b> (penta = five)." }
        ]
      },
      {
        id: "blues-2", title: "Intermediate", desc: "The 12-bar blues.",
        questions: [
          { q: "The 12-bar blues uses which three chords?", options: ["I, IV and V", "I, ii and iii", "I, III and VI", "ii, V and I"], answer: 0, explain: "<b>I, IV and V</b>." },
          { q: "Blues chords are very often played as which type?", options: ["Dominant 7th chords", "Major 7th chords", "Diminished chords", "Augmented chords"], answer: 0, explain: "<b>Dominant 7ths</b>." },
          { q: "A typical 12-bar blues lasts how many bars before repeating?", options: ["12", "8", "16", "4"], answer: 0, explain: "<b>12 bars</b>." },
          { q: "In C, the chords I–IV–V are…", options: ["C, F and G", "C, D and E", "C, G and A", "C, E and G"], answer: 0, explain: "<b>C, F, G</b>." },
          { q: "'Bending' a note towards a blue note is common in…", options: ["Blues and jazz", "Baroque fugues", "Plainchant", "Marches"], answer: 0, explain: "<b>Blues and jazz</b>." },
          { q: "A steady, repeated bass line under a blues is a…", options: ["Walking bass / riff", "Cadence", "Trill", "Coda"], answer: 0, explain: "A <b>walking bass</b> / riff." },
          { q: "The first chord of a standard 12-bar blues is…", options: ["Chord I (tonic)", "Chord V", "Chord IV", "Chord ii"], answer: 0, explain: "It starts on <b>I</b>." },
          { q: "A short repeated melodic/rhythmic idea in blues is called a…", options: ["Riff", "Cadence", "Fugue", "Coda"], answer: 0, explain: "A <b>riff</b>." }
        ]
      },
      {
        id: "blues-3", title: "Higher", desc: "Structure, rhythm and other keys.",
        questions: [
          { q: "The minor pentatonic scale uses the degrees…", options: ["1 ♭3 4 5 ♭7", "1 2 3 5 6", "1 ♭3 ♭5 5 ♭7", "1 3 5 7"], answer: 0, explain: "Minor pentatonic = <b>1 ♭3 4 5 ♭7</b>." },
          { q: "The G blues scale is…", options: ["G B♭ C D♭ D F", "G A B C D E", "G B D F", "G B♭ C D F"], answer: 0, explain: "1 ♭3 4 ♭5 5 ♭7 from G = <b>G B♭ C D♭ D F</b>." },
          { q: "Blues and jazz are usually played with a ___ rhythm.", options: ["Swung / shuffle", "Strictly straight", "Free / no pulse", "Marching"], answer: 0, explain: "A <b>swung (shuffle)</b> feel." },
          { q: "A vocalist sings a phrase and the band 'answers' it. This is…", options: ["Call and response", "Counterpoint", "Imitation", "Ostinato"], answer: 0, explain: "<b>Call and response</b>." },
          { q: "In a standard 12-bar blues, bars 1–4 typically use chord…", options: ["I", "IV", "V", "vi"], answer: 0, explain: "The first four bars sit on chord <b>I</b>." },
          { q: "The 'turnaround' at the end of a 12-bar blues usually features chord…", options: ["V (often V–IV–I)", "ii only", "vi only", "iii"], answer: 0, explain: "It returns via the <b>dominant (V)</b> to set up the repeat." },
          { q: "The blue note that distinguishes the blues scale from the minor pentatonic is the…", options: ["♭5", "♭3", "♭7", "4"], answer: 0, explain: "The added <b>♭5</b>." },
          { q: "Which scale would best fit improvising over a C blues?", options: ["C blues scale", "C major scale", "C whole-tone scale", "C harmonic minor"], answer: 0, explain: "The <b>C blues scale</b> fits the harmony." }
        ]
      }
    ],
    exam: { questions: [
      { q: "Notes in the blues scale:", options: ["6", "5", "7", "8"], answer: 0, explain: "Six." },
      { q: "Blues scale = minor pentatonic +", options: ["♭5", "major 3rd", "major 7th", "6th"], answer: 0, explain: "Flattened 5th." },
      { q: "C blues scale:", options: ["C E♭ F G♭ G B♭", "C D E F G A", "C E G B♭", "C E♭ G"], answer: 0, explain: "C E♭ F G♭ G B♭." },
      { q: "Blues scale formula:", options: ["1 ♭3 4 ♭5 5 ♭7", "1 2 3 4 5 6", "1 3 5 7", "1 ♭2 3 5"], answer: 0, explain: "1 ♭3 4 ♭5 5 ♭7." },
      { q: "12-bar blues chords:", options: ["I IV V", "I ii iii", "I III VI", "ii V I"], answer: 0, explain: "I, IV, V." },
      { q: "Blues chords are usually:", options: ["Dominant 7ths", "Major 7ths", "Diminished", "Augmented"], answer: 0, explain: "Dominant 7ths." },
      { q: "I, IV, V in C major:", options: ["C F G", "C D E", "C G A", "C E G"], answer: 0, explain: "C, F, G." },
      { q: "Bars in a 12-bar blues:", options: ["12", "8", "16", "4"], answer: 0, explain: "Twelve." },
      { q: "Minor pentatonic degrees:", options: ["1 ♭3 4 5 ♭7", "1 2 3 5 6", "1 ♭3 ♭5 5 ♭7", "1 3 5 7"], answer: 0, explain: "1 ♭3 4 5 ♭7." },
      { q: "Blues rhythm feel:", options: ["Swung/shuffle", "Straight", "Free", "March"], answer: 0, explain: "Swung." }
    ]}
  },

  /* ========================================================== */
  {
    id: "cadences",
    title: "Cadences",
    icon: "🔚",
    color: "linear-gradient(135deg,#16b364,#0a7a44)",
    desc: "Musical 'punctuation' — perfect, plagal, imperfect and interrupted.",
    flashcards: [
      { front: "What is a cadence?", back: "A pair of chords that punctuates the end of a musical phrase — like punctuation in a sentence." },
      { front: "Perfect cadence", back: "V – I. Strong and 'finished', like a full stop." },
      { front: "Plagal cadence", back: "IV – I. The gentle 'Amen' cadence heard at the end of hymns." },
      { front: "Imperfect cadence", back: "Ends ON chord V (e.g. I–V or ii–V). Sounds unfinished, like a question." },
      { front: "Interrupted cadence", back: "V – vi. A 'surprise' — you expect the tonic (I) but land on vi instead." },
      { front: "Quick recogniser", back: "Ends on I and from V = perfect; ends on I from IV = plagal; ends on V = imperfect; V to vi = interrupted." },
      { front: "Perfect cadence in C", back: "V–I = G chord then C chord." }
    ],
    levels: [
      {
        id: "cad-1", title: "Foundation", desc: "Perfect & plagal.",
        questions: [
          { q: "A cadence is…", options: ["A pair of chords ending a musical phrase", "A single note", "A fast scale", "A key signature"], answer: 0, explain: "Two chords that <b>end a phrase</b>." },
          { q: "A PERFECT cadence is the chord progression…", options: ["V – I", "IV – I", "I – V", "V – vi"], answer: 0, explain: "<b>V–I</b>." },
          { q: "A PLAGAL cadence is the chord progression…", options: ["IV – I", "V – I", "I – IV", "V – vi"], answer: 0, explain: "<b>IV–I</b>." },
          { q: "The plagal cadence is nicknamed the…", options: ["'Amen' cadence", "'Question' cadence", "'Surprise' cadence", "'Half' cadence"], answer: 0, explain: "The <b>'Amen'</b> cadence." },
          { q: "In C major, a perfect cadence uses the chords…", options: ["G – C", "F – C", "C – G", "G – A minor"], answer: 0, explain: "<b>G then C</b>." },
          { q: "Which cadence sounds the most finished and final?", options: ["Perfect", "Imperfect", "Interrupted", "Plagal is the only finished one"], answer: 0, explain: "The <b>perfect</b> cadence." },
          { q: "Both perfect and plagal cadences END on which chord?", options: ["I (tonic)", "V", "IV", "vi"], answer: 0, explain: "Both finish on chord <b>I</b>." },
          { q: "In C major, a plagal cadence uses the chords…", options: ["F – C", "G – C", "C – F", "G – Am"], answer: 0, explain: "IV–I = <b>F then C</b>." }
        ]
      },
      {
        id: "cad-2", title: "Intermediate", desc: "Imperfect & interrupted.",
        questions: [
          { q: "An IMPERFECT cadence ENDS on which chord?", options: ["V (the dominant)", "I (the tonic)", "IV", "vi"], answer: 0, explain: "It ends on chord <b>V</b>." },
          { q: "An INTERRUPTED cadence is the progression…", options: ["V – vi", "V – I", "IV – I", "I – V"], answer: 0, explain: "<b>V–vi</b>." },
          { q: "An imperfect cadence sounds like a…", options: ["Question / unfinished", "Full stop", "Amen", "Surprise"], answer: 0, explain: "A <b>question</b> (unfinished)." },
          { q: "Which cadence creates a 'surprise' by avoiding the expected tonic?", options: ["Interrupted", "Perfect", "Plagal", "Imperfect"], answer: 0, explain: "The <b>interrupted</b> cadence." },
          { q: "In C major, an interrupted cadence moves from G to…", options: ["A minor", "C", "F", "G7"], answer: 0, explain: "V–vi = G to <b>A minor</b>." },
          { q: "An imperfect cadence could be the progression…", options: ["ii – V", "V – I", "IV – I", "V – vi"], answer: 0, explain: "Any chord to <b>V</b>, e.g. ii–V." },
          { q: "The interrupted cadence resolves V to which chord in a major key?", options: ["vi (submediant, minor)", "I (major)", "IV", "iii"], answer: 0, explain: "To <b>vi</b> (e.g. A minor in C major)." },
          { q: "Cadences normally occur at the…", options: ["End of a phrase", "Start of every bar", "Middle of a note", "End of every beat"], answer: 0, explain: "At the <b>end of a phrase</b>." }
        ]
      },
      {
        id: "cad-3", title: "Higher", desc: "Analysis & finer detail.",
        questions: [
          { q: "A 'perfect authentic cadence' (the strongest form) needs V–I with…", options: ["Both chords in root position and the tonic in the top voice", "First-inversion chords", "A minor tonic", "An added 7th only"], answer: 0, explain: "Root-position V–I with the <b>tonic in the soprano</b> is strongest." },
          { q: "Using a dominant 7th (V7–I) instead of V–I makes the perfect cadence sound…", options: ["Even stronger / more driven", "Weaker", "Like a plagal cadence", "Unfinished"], answer: 0, explain: "The 7th adds extra pull, making it <b>stronger</b>." },
          { q: "Which cadence is most associated with the end of hymns ('A-men')?", options: ["Plagal", "Perfect", "Imperfect", "Interrupted"], answer: 0, explain: "The <b>plagal</b> cadence." },
          { q: "In Roman numerals, an imperfect cadence might be written as…", options: ["I – V or ii – V", "V – I", "IV – I", "V – vi"], answer: 0, explain: "It ends on V, e.g. <b>I–V</b> or <b>ii–V</b>." },
          { q: "An interrupted cadence is sometimes also called a…", options: ["Deceptive cadence", "Authentic cadence", "Half cadence", "Plagal cadence"], answer: 0, explain: "It is also the <b>deceptive</b> cadence." },
          { q: "An imperfect cadence is also known as a…", options: ["Half cadence", "Full cadence", "Plagal cadence", "Deceptive cadence"], answer: 0, explain: "It is the <b>half</b> cadence." },
          { q: "Which two cadences both END on the tonic (I)?", options: ["Perfect and plagal", "Perfect and imperfect", "Plagal and interrupted", "Imperfect and interrupted"], answer: 0, explain: "<b>Perfect (V–I)</b> and <b>plagal (IV–I)</b>." },
          { q: "An interrupted cadence is effective because the ear expects ___ but hears vi.", options: ["The tonic (I)", "The dominant (V)", "The subdominant (IV)", "A modulation"], answer: 0, explain: "The ear expects <b>I</b> after V." }
        ]
      }
    ],
    exam: { questions: [
      { q: "Perfect cadence:", options: ["V – I", "IV – I", "I – V", "V – vi"], answer: 0, explain: "V–I." },
      { q: "Plagal cadence:", options: ["IV – I", "V – I", "I – IV", "V – vi"], answer: 0, explain: "IV–I." },
      { q: "Plagal nickname:", options: ["Amen", "Question", "Surprise", "Half"], answer: 0, explain: "Amen." },
      { q: "Imperfect cadence ends on:", options: ["V", "I", "IV", "vi"], answer: 0, explain: "Chord V." },
      { q: "Interrupted cadence:", options: ["V – vi", "V – I", "IV – I", "I – V"], answer: 0, explain: "V–vi." },
      { q: "Most finished-sounding:", options: ["Perfect", "Imperfect", "Interrupted", "None"], answer: 0, explain: "Perfect." },
      { q: "Perfect cadence in C major:", options: ["G – C", "F – C", "C – G", "G – Am"], answer: 0, explain: "G to C." },
      { q: "Cadence that 'surprises':", options: ["Interrupted", "Perfect", "Plagal", "Imperfect"], answer: 0, explain: "Interrupted." },
      { q: "Imperfect cadence is also a:", options: ["Half cadence", "Full cadence", "Plagal cadence", "Authentic cadence"], answer: 0, explain: "Half cadence." },
      { q: "Cadences occur at the:", options: ["End of a phrase", "Start of a bar", "Middle of a note", "End of a beat"], answer: 0, explain: "End of a phrase." }
    ]}
  }

];

const PASS_MARK = 0.6; // 60% to pass / unlock
