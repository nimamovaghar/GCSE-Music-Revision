/* ============================================================
   HarmonyHub — GCSE Music Theory question bank (Eduqas-aligned)
   Each question: { q, options:[...], answer:<index>, explain }
   ============================================================ */

const TOPICS = [
  /* ---------------------------------------------------------- */
  {
    id: "notes",
    title: "Note Names & Pitch",
    icon: "🎹",
    color: "linear-gradient(135deg,#5b9bff,#1453d6)",
    desc: "Read notes on the treble and bass clef, find middle C and name pitches.",
    levels: [
      {
        id: "notes-1",
        title: "The Treble Clef",
        desc: "Lines and spaces of the treble clef.",
        questions: [
          { q: "What are the notes on the LINES of the treble clef, bottom to top?", options: ["E G B D F", "F A C E", "G B D F A", "A C E G"], answer: 0, explain: "Treble lines spell <b>E G B D F</b> — 'Every Good Boy Deserves Football'." },
          { q: "What word do the SPACES of the treble clef spell?", options: ["FACE", "GAGE", "BEAD", "DEAF"], answer: 0, explain: "The treble-clef spaces spell <b>FACE</b>, bottom to top." },
          { q: "Another name for the treble clef is the…", options: ["G clef", "C clef", "F clef", "D clef"], answer: 0, explain: "The treble clef is the <b>G clef</b> — its curl circles the G line." },
          { q: "Which note sits on the bottom line of the treble clef?", options: ["E", "F", "G", "D"], answer: 0, explain: "The bottom line of the treble clef is <b>E</b>." },
          { q: "Which note sits in the top space of the treble clef?", options: ["E", "F", "G", "C"], answer: 0, explain: "Treble spaces spell FACE going up (F–A–C–E), so the top space is <b>E</b>." },
          { q: "The treble clef is mostly used for…", options: ["Higher-pitched instruments & right hand", "Bass guitar only", "Drums", "Lower-pitched instruments"], answer: 0, explain: "Treble clef notates <b>higher pitches</b> (e.g. flute, violin, piano right hand)." }
        ]
      },
      {
        id: "notes-2",
        title: "The Bass Clef & Middle C",
        desc: "Bass clef lines/spaces and locating middle C.",
        questions: [
          { q: "The notes on the LINES of the bass clef, bottom to top, are…", options: ["G B D F A", "E G B D F", "A C E G", "F A C E"], answer: 0, explain: "Bass lines = <b>G B D F A</b> — 'Good Boys Deserve Football Always'." },
          { q: "The SPACES of the bass clef spell…", options: ["A C E G", "FACE", "E G B D", "G B D F"], answer: 0, explain: "Bass spaces = <b>A C E G</b> — 'All Cows Eat Grass'." },
          { q: "Another name for the bass clef is the…", options: ["F clef", "G clef", "C clef", "Alto clef"], answer: 0, explain: "The bass clef is the <b>F clef</b>; its two dots surround the F line." },
          { q: "Middle C is written on a ledger line…", options: ["Below the treble staff / above the bass staff", "On the middle line of the treble clef", "Two octaves above the bass clef", "It cannot be written"], answer: 0, explain: "Middle C sits on a short <b>ledger line</b> just below the treble staff and just above the bass staff." },
          { q: "On a piano, the bass clef is usually played by the…", options: ["Left hand", "Right hand", "Both hands equally", "Feet"], answer: 0, explain: "Lower pitches (bass clef) are typically the pianist's <b>left hand</b>." },
          { q: "How many semitones are there in one octave?", options: ["12", "8", "7", "6"], answer: 0, explain: "An octave spans <b>12 semitones</b> (e.g. C up to the next C)." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "Treble-clef lines spell:", options: ["E G B D F", "F A C E", "G B D F A", "A C E G"], answer: 0, explain: "EGBDF." },
        { q: "Treble-clef spaces spell:", options: ["FACE", "BEAD", "GAGE", "ACEG"], answer: 0, explain: "FACE." },
        { q: "Bass-clef lines spell:", options: ["G B D F A", "E G B D F", "A C E G", "FACE"], answer: 0, explain: "GBDFA." },
        { q: "Bass-clef spaces spell:", options: ["A C E G", "FACE", "GBDF", "EGBD"], answer: 0, explain: "ACEG." },
        { q: "The treble clef is also the:", options: ["G clef", "F clef", "C clef", "D clef"], answer: 0, explain: "G clef." },
        { q: "The bass clef is also the:", options: ["F clef", "G clef", "C clef", "Alto clef"], answer: 0, explain: "F clef." },
        { q: "Middle C is found on a ledger line below the:", options: ["Treble staff", "Bass clef bottom", "Drum staff", "None"], answer: 0, explain: "Just below treble, just above bass." },
        { q: "Semitones in an octave:", options: ["12", "8", "7", "6"], answer: 0, explain: "12 semitones." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "intervals",
    title: "Intervals",
    icon: "📏",
    color: "linear-gradient(135deg,#7c5bff,#3b1bb0)",
    desc: "Measure the distance between two notes — tones, semitones and named intervals.",
    levels: [
      {
        id: "intervals-1",
        title: "Tones & Semitones",
        desc: "The building blocks of intervals.",
        questions: [
          { q: "A semitone is…", options: ["The smallest interval in Western music", "The same as an octave", "Three notes apart", "A type of chord"], answer: 0, explain: "A <b>semitone</b> is the smallest standard interval — one fret / one adjacent key." },
          { q: "How many semitones make a tone?", options: ["2", "1", "3", "12"], answer: 0, explain: "A <b>tone</b> = <b>2 semitones</b>." },
          { q: "From C to D is a…", options: ["Tone", "Semitone", "Perfect 5th", "Octave"], answer: 0, explain: "C–D skips C# so it is a <b>tone</b> (2 semitones)." },
          { q: "From E to F is a…", options: ["Semitone", "Tone", "Major 3rd", "Tritone"], answer: 0, explain: "E–F are adjacent with no note between, so it is a <b>semitone</b>." },
          { q: "From B to C is a…", options: ["Semitone", "Tone", "Perfect 4th", "Minor 3rd"], answer: 0, explain: "B–C is a natural <b>semitone</b> (no black key between)." }
        ]
      },
      {
        id: "intervals-2",
        title: "Naming Intervals",
        desc: "Counting interval numbers and quality.",
        questions: [
          { q: "C up to G is which interval?", options: ["Perfect 5th", "Perfect 4th", "Major 3rd", "Octave"], answer: 0, explain: "C(1) D E F G(5) = a 5th; C–G is a <b>perfect 5th</b> (7 semitones)." },
          { q: "C up to F is which interval?", options: ["Perfect 4th", "Perfect 5th", "Major 3rd", "Major 2nd"], answer: 0, explain: "C D E F = a 4th; <b>perfect 4th</b> = 5 semitones." },
          { q: "A major 3rd contains how many semitones?", options: ["4", "3", "5", "7"], answer: 0, explain: "Major 3rd = <b>4 semitones</b> (e.g. C–E); a minor 3rd is 3." },
          { q: "A minor 3rd contains how many semitones?", options: ["3", "4", "2", "5"], answer: 0, explain: "Minor 3rd = <b>3 semitones</b> (e.g. C–Eb)." },
          { q: "C up to the next C is an…", options: ["Octave", "Perfect 5th", "Major 7th", "Unison"], answer: 0, explain: "Same letter, 12 semitones higher = an <b>octave</b>." },
          { q: "Two notes of exactly the same pitch form a…", options: ["Unison", "Octave", "2nd", "Tritone"], answer: 0, explain: "Same pitch = <b>unison</b> (a 1st)." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "A tone = how many semitones?", options: ["2", "1", "3", "4"], answer: 0, explain: "2 semitones." },
        { q: "E to F is a:", options: ["Semitone", "Tone", "3rd", "Octave"], answer: 0, explain: "Natural semitone." },
        { q: "C to G is a:", options: ["Perfect 5th", "Perfect 4th", "Major 6th", "Octave"], answer: 0, explain: "Perfect 5th, 7 semitones." },
        { q: "C to F is a:", options: ["Perfect 4th", "Perfect 5th", "Major 3rd", "2nd"], answer: 0, explain: "Perfect 4th, 5 semitones." },
        { q: "Major 3rd semitones:", options: ["4", "3", "5", "2"], answer: 0, explain: "4 semitones." },
        { q: "Minor 3rd semitones:", options: ["3", "4", "2", "5"], answer: 0, explain: "3 semitones." },
        { q: "12 semitones =", options: ["Octave", "Perfect 5th", "Major 7th", "Tritone"], answer: 0, explain: "An octave." },
        { q: "Same pitch twice =", options: ["Unison", "Octave", "2nd", "5th"], answer: 0, explain: "Unison." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "scales",
    title: "Major & Minor Scales",
    icon: "🎼",
    color: "linear-gradient(135deg,#2fd0c5,#0b8f86)",
    desc: "Scale patterns, relative minors and the three forms of the minor scale.",
    levels: [
      {
        id: "scales-1",
        title: "Major Scales",
        desc: "Tone/semitone pattern and key relationships.",
        questions: [
          { q: "The tone/semitone pattern of a MAJOR scale is:", options: ["T T S T T T S", "T S T T S T T", "S T T T S T T", "T T T S T T S"], answer: 0, explain: "Major scale = <b>T T S T T T S</b>." },
          { q: "The C major scale contains…", options: ["No sharps or flats", "One sharp", "One flat", "Two sharps"], answer: 0, explain: "C major has <b>no sharps or flats</b> — all white keys." },
          { q: "Which note is the TONIC of G major?", options: ["G", "C", "D", "F#"], answer: 0, explain: "The tonic is the first note / key note — <b>G</b>." },
          { q: "The 5th degree of a scale is called the…", options: ["Dominant", "Subdominant", "Mediant", "Leading note"], answer: 0, explain: "Scale degree 5 = the <b>dominant</b>." },
          { q: "The 4th degree of a scale is called the…", options: ["Subdominant", "Dominant", "Tonic", "Supertonic"], answer: 0, explain: "Degree 4 = the <b>subdominant</b>." }
        ]
      },
      {
        id: "scales-2",
        title: "Minor Scales",
        desc: "Natural, harmonic, melodic & the relative minor.",
        questions: [
          { q: "The relative minor of C major is…", options: ["A minor", "E minor", "G minor", "F minor"], answer: 0, explain: "Relative minor is a minor 3rd (3 semitones) below the tonic — <b>A minor</b>." },
          { q: "A relative minor shares the major key's…", options: ["Key signature", "Tonic note", "Tempo", "Time signature"], answer: 0, explain: "Relatives share the same <b>key signature</b> but a different tonic." },
          { q: "The HARMONIC minor scale raises which note?", options: ["The 7th", "The 2nd", "The 5th", "The 4th"], answer: 0, explain: "Harmonic minor sharpens the <b>7th</b> degree (the leading note)." },
          { q: "The MELODIC minor (ascending) raises which two notes?", options: ["6th and 7th", "2nd and 3rd", "4th and 5th", "1st and 8th"], answer: 0, explain: "Ascending melodic minor raises the <b>6th and 7th</b>; descending it reverts to natural minor." },
          { q: "The NATURAL minor uses…", options: ["The notes of the key signature with no alterations", "A raised 7th", "A raised 6th and 7th", "A flattened 2nd"], answer: 0, explain: "Natural minor uses the key signature's notes <b>unaltered</b>." },
          { q: "A minor's natural form contains…", options: ["No sharps or flats", "One sharp", "Three flats", "Two sharps"], answer: 0, explain: "A natural minor = all white keys — <b>no sharps or flats</b>." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "Major scale pattern:", options: ["T T S T T T S", "T S T T S T T", "S T T S T T T", "T T S T S T T"], answer: 0, explain: "TTSTTTS." },
        { q: "C major has:", options: ["No sharps/flats", "1 sharp", "1 flat", "2 sharps"], answer: 0, explain: "None." },
        { q: "Relative minor of C major:", options: ["A minor", "E minor", "D minor", "G minor"], answer: 0, explain: "A minor." },
        { q: "Relatives share the same:", options: ["Key signature", "Tonic", "Tempo", "Clef"], answer: 0, explain: "Key signature." },
        { q: "Harmonic minor raises the:", options: ["7th", "6th", "5th", "2nd"], answer: 0, explain: "7th." },
        { q: "Melodic minor (asc.) raises:", options: ["6th & 7th", "2nd & 3rd", "4th & 5th", "1st & 5th"], answer: 0, explain: "6th and 7th." },
        { q: "Scale degree 5 is the:", options: ["Dominant", "Subdominant", "Mediant", "Tonic"], answer: 0, explain: "Dominant." },
        { q: "Scale degree 4 is the:", options: ["Subdominant", "Dominant", "Leading note", "Tonic"], answer: 0, explain: "Subdominant." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "triads",
    title: "Triads",
    icon: "△",
    color: "linear-gradient(135deg,#ff8f5b,#d6431b)",
    desc: "Build major, minor, diminished and augmented three-note chords.",
    levels: [
      {
        id: "triads-1",
        title: "Major & Minor Triads",
        desc: "The two most common triads.",
        questions: [
          { q: "A triad is a chord of how many notes?", options: ["3", "2", "4", "5"], answer: 0, explain: "A <b>triad</b> = <b>3 notes</b>: root, third and fifth." },
          { q: "A MAJOR triad is built from…", options: ["Major 3rd + perfect 5th", "Minor 3rd + perfect 5th", "Major 3rd + augmented 5th", "Minor 3rd + diminished 5th"], answer: 0, explain: "Major triad = root, <b>major 3rd</b> and <b>perfect 5th</b>." },
          { q: "The C major triad is…", options: ["C E G", "C Eb G", "C E G#", "C Eb Gb"], answer: 0, explain: "C major = <b>C E G</b>." },
          { q: "A MINOR triad is built from…", options: ["Minor 3rd + perfect 5th", "Major 3rd + perfect 5th", "Minor 3rd + diminished 5th", "Major 3rd + augmented 5th"], answer: 0, explain: "Minor triad = root, <b>minor 3rd</b>, <b>perfect 5th</b>." },
          { q: "The A minor triad is…", options: ["A C E", "A C# E", "A C E#", "A Cb Eb"], answer: 0, explain: "A minor = <b>A C E</b>." }
        ]
      },
      {
        id: "triads-2",
        title: "Diminished & Augmented",
        desc: "The two coloured triads.",
        questions: [
          { q: "A DIMINISHED triad is built from…", options: ["Minor 3rd + diminished 5th", "Major 3rd + perfect 5th", "Minor 3rd + perfect 5th", "Major 3rd + augmented 5th"], answer: 0, explain: "Diminished = <b>minor 3rd + diminished 5th</b> (both intervals 'squashed')." },
          { q: "The C diminished triad is…", options: ["C Eb Gb", "C E G", "C Eb G", "C E G#"], answer: 0, explain: "C diminished = <b>C Eb Gb</b>." },
          { q: "An AUGMENTED triad is built from…", options: ["Major 3rd + augmented 5th", "Minor 3rd + perfect 5th", "Major 3rd + perfect 5th", "Minor 3rd + diminished 5th"], answer: 0, explain: "Augmented = <b>major 3rd + augmented 5th</b> (the 5th is raised)." },
          { q: "The C augmented triad is…", options: ["C E G#", "C E G", "C Eb Gb", "C Eb G"], answer: 0, explain: "C augmented = <b>C E G#</b>." },
          { q: "Which triad sounds the most tense/unstable, often described as 'spooky'?", options: ["Diminished", "Major", "Minor", "Perfect"], answer: 0, explain: "The <b>diminished</b> triad is the most dissonant/unstable of the four." },
          { q: "How many semitones in an augmented 5th (root to 5th)?", options: ["8", "7", "6", "9"], answer: 0, explain: "Augmented 5th = <b>8 semitones</b> (perfect 5th = 7, +1)." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "Notes in a triad:", options: ["3", "2", "4", "5"], answer: 0, explain: "Three." },
        { q: "Major triad =", options: ["Major 3rd + perfect 5th", "Minor 3rd + perfect 5th", "Major 3rd + aug 5th", "Minor 3rd + dim 5th"], answer: 0, explain: "Maj3 + P5." },
        { q: "C major triad:", options: ["C E G", "C Eb G", "C E G#", "C Eb Gb"], answer: 0, explain: "C E G." },
        { q: "Minor triad =", options: ["Minor 3rd + perfect 5th", "Major 3rd + perfect 5th", "Minor 3rd + dim 5th", "Major 3rd + aug 5th"], answer: 0, explain: "Min3 + P5." },
        { q: "A minor triad:", options: ["A C E", "A C# E", "A C E#", "A Cb E"], answer: 0, explain: "A C E." },
        { q: "Diminished triad =", options: ["Minor 3rd + dim 5th", "Major 3rd + perfect 5th", "Minor 3rd + perfect 5th", "Major 3rd + aug 5th"], answer: 0, explain: "Min3 + dim5." },
        { q: "C augmented triad:", options: ["C E G#", "C E G", "C Eb Gb", "C Eb G"], answer: 0, explain: "C E G#." },
        { q: "Most unstable triad:", options: ["Diminished", "Major", "Minor", "Augmented"], answer: 0, explain: "Diminished." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "chordtones",
    title: "Root, Third & Fifth",
    icon: "🎯",
    color: "linear-gradient(135deg,#ff5b8f,#b01b5a)",
    desc: "Identify the chord tones that make up every triad.",
    levels: [
      {
        id: "chordtones-1",
        title: "Naming Chord Tones",
        desc: "Root, third and fifth of a chord.",
        questions: [
          { q: "The note a chord is built on / named after is the…", options: ["Root", "Third", "Fifth", "Seventh"], answer: 0, explain: "The <b>root</b> is the foundation note that names the chord." },
          { q: "In the C major chord (C E G), which note is the THIRD?", options: ["E", "C", "G", "B"], answer: 0, explain: "Counting C(1) D E(3): <b>E</b> is the third." },
          { q: "In the C major chord (C E G), which note is the FIFTH?", options: ["G", "C", "E", "A"], answer: 0, explain: "C(1)...G(5): <b>G</b> is the fifth." },
          { q: "The quality (major/minor) of a chord is decided by its…", options: ["Third", "Root", "Fifth", "Octave"], answer: 0, explain: "The <b>third</b> determines major vs minor (major 3rd vs minor 3rd)." },
          { q: "In G major (G B D), the root is…", options: ["G", "B", "D", "F#"], answer: 0, explain: "The chord is named after its root — <b>G</b>." }
        ]
      },
      {
        id: "chordtones-2",
        title: "Spotting the Tones",
        desc: "Work out roots, thirds and fifths in different chords.",
        questions: [
          { q: "In F major (F A C), which note is the fifth?", options: ["C", "F", "A", "D"], answer: 0, explain: "F(1) ... C(5): <b>C</b> is the fifth." },
          { q: "In D minor (D F A), which note is the third?", options: ["F", "D", "A", "C"], answer: 0, explain: "D(1) ... F(3): <b>F</b> (a minor 3rd above D)." },
          { q: "Removing the third from a chord leaves a 'power chord' made of…", options: ["Root and fifth", "Root and third", "Third and fifth", "Root and seventh"], answer: 0, explain: "A power chord is just <b>root + fifth</b> (no third, so no major/minor quality)." },
          { q: "The fifth above C is…", options: ["G", "F", "A", "E"], answer: 0, explain: "A perfect 5th above C is <b>G</b>." },
          { q: "If E is the third of a major chord, the root is…", options: ["C", "G", "A", "E"], answer: 0, explain: "A major 3rd below E is <b>C</b>, so the chord is C major." },
          { q: "Which chord tone is usually in the bass for 'root position'?", options: ["Root", "Third", "Fifth", "Seventh"], answer: 0, explain: "Root position = the <b>root</b> is the lowest note." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "Note that names a chord:", options: ["Root", "Third", "Fifth", "Seventh"], answer: 0, explain: "Root." },
        { q: "Third of C major (C E G):", options: ["E", "C", "G", "B"], answer: 0, explain: "E." },
        { q: "Fifth of C major:", options: ["G", "C", "E", "A"], answer: 0, explain: "G." },
        { q: "What decides major vs minor:", options: ["Third", "Root", "Fifth", "Octave"], answer: 0, explain: "The third." },
        { q: "Fifth of F major (F A C):", options: ["C", "F", "A", "G"], answer: 0, explain: "C." },
        { q: "Third of D minor (D F A):", options: ["F", "D", "A", "C"], answer: 0, explain: "F." },
        { q: "Power chord =", options: ["Root + fifth", "Root + third", "Third + fifth", "Root + seventh"], answer: 0, explain: "Root and fifth." },
        { q: "Root-position bass note:", options: ["Root", "Third", "Fifth", "Seventh"], answer: 0, explain: "Root." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "inversions",
    title: "Chord Inversions",
    icon: "🔁",
    color: "linear-gradient(135deg,#5bd0ff,#0b6fb8)",
    desc: "Root position, first and second inversion, and figured-bass symbols.",
    levels: [
      {
        id: "inv-1",
        title: "Root, 1st & 2nd Inversion",
        desc: "Which chord tone is in the bass.",
        questions: [
          { q: "In FIRST inversion, which chord tone is in the bass?", options: ["Third", "Root", "Fifth", "Seventh"], answer: 0, explain: "First inversion = the <b>third</b> is the lowest note." },
          { q: "In SECOND inversion, which chord tone is in the bass?", options: ["Fifth", "Root", "Third", "Seventh"], answer: 0, explain: "Second inversion = the <b>fifth</b> is in the bass." },
          { q: "C major in first inversion has which note in the bass?", options: ["E", "C", "G", "B"], answer: 0, explain: "First inversion puts the third (<b>E</b>) at the bottom: E G C." },
          { q: "C major in second inversion has which note in the bass?", options: ["G", "C", "E", "A"], answer: 0, explain: "Second inversion puts the fifth (<b>G</b>) at the bottom: G C E." },
          { q: "Root position has which note in the bass?", options: ["Root", "Third", "Fifth", "Any note"], answer: 0, explain: "Root position = the <b>root</b> is the lowest note." }
        ]
      },
      {
        id: "inv-2",
        title: "Figured Bass Symbols",
        desc: "The numbers used to label inversions.",
        questions: [
          { q: "The figured-bass symbol for FIRST inversion is…", options: ["6 (or 6/3)", "6/4", "5/3", "7"], answer: 0, explain: "First inversion = <b>6</b> (short for 6/3)." },
          { q: "The figured-bass symbol for SECOND inversion is…", options: ["6/4", "6", "5/3", "7"], answer: 0, explain: "Second inversion = <b>6/4</b>." },
          { q: "Root position is shown by the figures…", options: ["5/3 (usually left blank)", "6", "6/4", "4/2"], answer: 0, explain: "Root position = <b>5/3</b>, usually left unmarked." },
          { q: "A 'Ic' chord in Roman-numeral analysis is…", options: ["Chord I in second inversion", "Chord I in first inversion", "Chord I root position", "Chord 1 of a 7th"], answer: 0, explain: "Lowercase 'c' = <b>second inversion</b>, so Ic = tonic 2nd inversion." },
          { q: "The letter suffix 'b' (e.g. Vb) means…", options: ["First inversion", "Second inversion", "Root position", "A 7th chord"], answer: 0, explain: "'b' = <b>first inversion</b>; 'a' = root, 'c' = second inversion." },
          { q: "Why use inversions?", options: ["For smoother bass lines / voice leading", "To make the chord louder", "To change the key", "To remove the third"], answer: 0, explain: "Inversions give <b>smoother bass lines</b> and connect chords more fluidly." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "1st inversion bass note:", options: ["Third", "Root", "Fifth", "Seventh"], answer: 0, explain: "Third." },
        { q: "2nd inversion bass note:", options: ["Fifth", "Root", "Third", "Seventh"], answer: 0, explain: "Fifth." },
        { q: "C major 1st inversion bass:", options: ["E", "C", "G", "B"], answer: 0, explain: "E." },
        { q: "C major 2nd inversion bass:", options: ["G", "C", "E", "A"], answer: 0, explain: "G." },
        { q: "Figured bass for 1st inversion:", options: ["6", "6/4", "5/3", "7"], answer: 0, explain: "6." },
        { q: "Figured bass for 2nd inversion:", options: ["6/4", "6", "5/3", "4/2"], answer: 0, explain: "6/4." },
        { q: "'Vb' means chord V in:", options: ["1st inversion", "2nd inversion", "Root position", "7th"], answer: 0, explain: "b = first inversion." },
        { q: "Inversions are mainly used for:", options: ["Smoother bass lines", "Louder chords", "Key changes", "Removing thirds"], answer: 0, explain: "Voice leading." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "arpeggios",
    title: "Arpeggios",
    icon: "🌊",
    color: "linear-gradient(135deg,#9b8bff,#5b3bd6)",
    desc: "Broken chords — playing chord notes one after another.",
    levels: [
      {
        id: "arp-1",
        title: "What is an Arpeggio?",
        desc: "Broken chords and how they're played.",
        questions: [
          { q: "An arpeggio is…", options: ["The notes of a chord played one after another", "All chord notes played together", "A fast scale", "A type of rest"], answer: 0, explain: "An <b>arpeggio</b> (broken chord) plays the chord notes <b>separately</b>, in sequence." },
          { q: "The word 'arpeggio' comes from the Italian for…", options: ["To play like a harp", "Fast", "Loud", "Together"], answer: 0, explain: "'Arpeggiare' = <b>to play like a harp</b>, where notes ring out one by one." },
          { q: "A C major arpeggio (one octave, ascending) is…", options: ["C E G C", "C D E F", "C E G B", "C Eb G C"], answer: 0, explain: "It uses the chord tones: <b>C E G</b> then C an octave up." },
          { q: "An arpeggio uses the same notes as the…", options: ["Chord it is based on", "Whole scale", "Blues scale", "Key signature"], answer: 0, explain: "An arpeggio uses exactly the <b>notes of its chord</b>." },
          { q: "Playing a chord with notes spread out and overlapping (e.g. on a harp/piano) is sometimes called a…", options: ["Rolled / spread chord", "Tremolo", "Glissando", "Trill"], answer: 0, explain: "A <b>rolled (spread) chord</b> is an arpeggiated chord, often marked with a wavy line." }
        ]
      },
      {
        id: "arp-2",
        title: "Building Arpeggios",
        desc: "Work out arpeggios for different chords.",
        questions: [
          { q: "A G major arpeggio uses which notes?", options: ["G B D", "G Bb D", "G B D F", "G A B C"], answer: 0, explain: "G major chord = <b>G B D</b>, so its arpeggio uses those notes." },
          { q: "An A minor arpeggio uses which notes?", options: ["A C E", "A C# E", "A C E G", "A B C D"], answer: 0, explain: "A minor chord = <b>A C E</b>." },
          { q: "An arpeggio differs from a scale because it…", options: ["Skips notes (uses chord tones only)", "Uses every note in order", "Is always descending", "Has no rhythm"], answer: 0, explain: "Arpeggios <b>leap between chord tones</b>; scales move stepwise." },
          { q: "A 'broken chord' is another name for…", options: ["An arpeggio", "A wrong chord", "A diminished chord", "A cadence"], answer: 0, explain: "'Broken chord' = <b>arpeggio</b>." },
          { q: "A D major arpeggio uses…", options: ["D F# A", "D F A", "D F# A C", "D E F# G"], answer: 0, explain: "D major chord = <b>D F# A</b>." },
          { q: "Bass lines that outline arpeggios are common in which style?", options: ["Alberti bass (Classical)", "Plainchant", "Atonal", "Drum solos"], answer: 0, explain: "<b>Alberti bass</b> is a broken-chord (arpeggiated) accompaniment from the Classical era." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "An arpeggio is:", options: ["Chord notes played one after another", "Chord notes together", "A fast scale", "A rest"], answer: 0, explain: "Broken chord." },
        { q: "Another name for arpeggio:", options: ["Broken chord", "Cadence", "Triad", "Interval"], answer: 0, explain: "Broken chord." },
        { q: "C major arpeggio:", options: ["C E G (C)", "C D E F", "C E G B", "C Eb G"], answer: 0, explain: "C E G." },
        { q: "G major arpeggio:", options: ["G B D", "G Bb D", "G B D F", "G A B"], answer: 0, explain: "G B D." },
        { q: "A minor arpeggio:", options: ["A C E", "A C# E", "A C E G", "A B C"], answer: 0, explain: "A C E." },
        { q: "D major arpeggio:", options: ["D F# A", "D F A", "D F# A C", "D E F#"], answer: 0, explain: "D F# A." },
        { q: "Arpeggio vs scale: arpeggio…", options: ["Uses chord tones only", "Uses every note", "Always descends", "Has no pitch"], answer: 0, explain: "Chord tones only." },
        { q: "Classical broken-chord accompaniment:", options: ["Alberti bass", "Plainchant", "Walking bass", "Ostinato"], answer: 0, explain: "Alberti bass." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "sevenths",
    title: "Seventh Chords",
    icon: "7️⃣",
    color: "linear-gradient(135deg,#ffbf3b,#d68a00)",
    desc: "Add a seventh to a triad — dominant 7th, major 7th and minor 7th.",
    levels: [
      {
        id: "sev-1",
        title: "Adding the Seventh",
        desc: "How four-note seventh chords are formed.",
        questions: [
          { q: "A seventh chord is a triad PLUS…", options: ["A seventh above the root", "A second above the root", "Another fifth", "An octave"], answer: 0, explain: "A 7th chord = root, 3rd, 5th <b>+ a 7th</b> above the root (4 notes)." },
          { q: "A DOMINANT 7th = major triad + a…", options: ["Minor 7th", "Major 7th", "Perfect 5th", "Diminished 5th"], answer: 0, explain: "Dominant 7th = major triad + <b>minor 7th</b> (e.g. C E G Bb)." },
          { q: "The chord C7 (dominant 7th) contains…", options: ["C E G Bb", "C E G B", "C Eb G Bb", "C E G A"], answer: 0, explain: "C7 = <b>C E G Bb</b>." },
          { q: "A dominant 7th is usually built on which scale degree?", options: ["The 5th (dominant)", "The 1st (tonic)", "The 4th (subdominant)", "The 2nd"], answer: 0, explain: "It's built on the <b>dominant (V)</b>, hence the name — e.g. G7 in C major." },
          { q: "How many notes are in a seventh chord?", options: ["4", "3", "5", "2"], answer: 0, explain: "Four: root, third, fifth and seventh." }
        ]
      },
      {
        id: "sev-2",
        title: "Major & Minor 7ths",
        desc: "Telling the seventh-chord qualities apart.",
        questions: [
          { q: "A MAJOR 7th chord = major triad + a…", options: ["Major 7th", "Minor 7th", "Diminished 7th", "Perfect 5th"], answer: 0, explain: "Major 7th chord = major triad + <b>major 7th</b> (e.g. Cmaj7 = C E G B)." },
          { q: "Cmaj7 contains…", options: ["C E G B", "C E G Bb", "C Eb G Bb", "C E G A"], answer: 0, explain: "Cmaj7 = <b>C E G B</b> (note the natural B)." },
          { q: "A MINOR 7th chord = minor triad + a…", options: ["Minor 7th", "Major 7th", "Augmented 7th", "Perfect 4th"], answer: 0, explain: "Minor 7th chord = minor triad + <b>minor 7th</b> (e.g. Cm7 = C Eb G Bb)." },
          { q: "Which seventh chord most strongly wants to resolve to the tonic?", options: ["Dominant 7th", "Major 7th", "Minor 7th", "None of them"], answer: 0, explain: "The <b>dominant 7th</b> creates strong tension that pulls to chord I." },
          { q: "The interval from the root to the 7th in a dominant 7th chord is…", options: ["10 semitones (minor 7th)", "11 semitones (major 7th)", "12 semitones (octave)", "7 semitones"], answer: 0, explain: "A minor 7th = <b>10 semitones</b>." },
          { q: "Seventh chords are especially common in which genres?", options: ["Jazz & blues", "Plainchant", "Marches", "Nursery rhymes"], answer: 0, explain: "<b>Jazz and blues</b> rely heavily on 7th chords for their rich sound." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "A 7th chord has how many notes:", options: ["4", "3", "5", "2"], answer: 0, explain: "Four." },
        { q: "Dominant 7th = major triad +", options: ["Minor 7th", "Major 7th", "Perfect 5th", "Dim 5th"], answer: 0, explain: "Minor 7th." },
        { q: "C7 =", options: ["C E G Bb", "C E G B", "C Eb G Bb", "C E G A"], answer: 0, explain: "C E G Bb." },
        { q: "Major 7th chord = major triad +", options: ["Major 7th", "Minor 7th", "Dim 7th", "Perfect 4th"], answer: 0, explain: "Major 7th." },
        { q: "Cmaj7 =", options: ["C E G B", "C E G Bb", "C Eb G Bb", "C E G A"], answer: 0, explain: "C E G B." },
        { q: "Minor 7th chord = minor triad +", options: ["Minor 7th", "Major 7th", "Aug 7th", "Perfect 4th"], answer: 0, explain: "Minor 7th." },
        { q: "Dominant 7th is built on degree:", options: ["5 (dominant)", "1 (tonic)", "4 (subdominant)", "2"], answer: 0, explain: "The dominant." },
        { q: "7th chords are common in:", options: ["Jazz & blues", "Plainchant", "Marches", "Nursery rhymes"], answer: 0, explain: "Jazz & blues." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "blues",
    title: "The Blues Scale",
    icon: "🎸",
    color: "linear-gradient(135deg,#2f3b66,#0a1633)",
    desc: "The six-note blues scale, blue notes and the 12-bar blues.",
    levels: [
      {
        id: "blues-1",
        title: "Building the Blues Scale",
        desc: "Notes and the famous 'blue note'.",
        questions: [
          { q: "The blues scale has how many different notes (excluding the octave)?", options: ["6", "5", "7", "8"], answer: 0, explain: "The blues scale has <b>6 notes</b> — the minor pentatonic plus the flat 5th." },
          { q: "The blues scale is the minor pentatonic plus which added note?", options: ["The flattened 5th (b5)", "The major 3rd", "The major 7th", "The 6th"], answer: 0, explain: "The added 'blue note' is the <b>flattened 5th (b5)</b>." },
          { q: "The C blues scale is…", options: ["C Eb F Gb G Bb", "C D E F G A", "C E G Bb", "C Eb G Bb"], answer: 0, explain: "C blues = <b>C Eb F Gb G Bb</b> (1, b3, 4, b5, 5, b7)." },
          { q: "The scale-degree formula for the blues scale is…", options: ["1 b3 4 b5 5 b7", "1 2 3 4 5 6", "1 3 5 7", "1 b2 3 5 b7"], answer: 0, explain: "Blues scale = <b>1, b3, 4, b5, 5, b7</b>." },
          { q: "The 'blue notes' give blues music its characteristic…", options: ["Expressive, slightly clashing sound", "Bright, happy sound", "Silent sound", "Marching feel"], answer: 0, explain: "Blue notes (flattened 3rd, 5th, 7th) add the <b>expressive, soulful clash</b>." }
        ]
      },
      {
        id: "blues-2",
        title: "12-Bar Blues",
        desc: "The classic blues chord structure.",
        questions: [
          { q: "The 12-bar blues uses which three chords?", options: ["I, IV and V", "I, ii and iii", "I, III and VI", "ii, V and I"], answer: 0, explain: "12-bar blues uses the <b>tonic (I), subdominant (IV) and dominant (V)</b>." },
          { q: "Blues chords are very often played as which type?", options: ["Dominant 7th chords", "Major 7th chords", "Diminished chords", "Augmented chords"], answer: 0, explain: "Blues typically uses <b>dominant 7th</b> chords on I, IV and V." },
          { q: "A typical 12-bar blues lasts how many bars before repeating?", options: ["12", "8", "16", "4"], answer: 0, explain: "It is a <b>12-bar</b> repeating pattern, hence the name." },
          { q: "In C, the chords I–IV–V are…", options: ["C, F and G", "C, D and E", "C, G and A", "C, E and G"], answer: 0, explain: "In C major: I=C, IV=<b>F</b>, V=<b>G</b>." },
          { q: "The vocal style of 'bending' a note towards a blue note is common in…", options: ["Blues and jazz", "Baroque fugues", "Plainchant", "Military marches"], answer: 0, explain: "Note-bending towards blue notes is a hallmark of <b>blues and jazz</b>." },
          { q: "A repeated bass riff under a 12-bar blues is called a…", options: ["Walking bass / riff", "Cadence", "Trill", "Coda"], answer: 0, explain: "A steady moving bass line is a <b>walking bass</b> / riff." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "Notes in the blues scale:", options: ["6", "5", "7", "8"], answer: 0, explain: "Six." },
        { q: "Blues scale = minor pentatonic +", options: ["b5", "major 3rd", "major 7th", "6th"], answer: 0, explain: "Flattened 5th." },
        { q: "C blues scale:", options: ["C Eb F Gb G Bb", "C D E F G A", "C E G Bb", "C Eb G"], answer: 0, explain: "C Eb F Gb G Bb." },
        { q: "Blues scale formula:", options: ["1 b3 4 b5 5 b7", "1 2 3 4 5 6", "1 3 5 7", "1 b2 3 5"], answer: 0, explain: "1 b3 4 b5 5 b7." },
        { q: "12-bar blues chords:", options: ["I IV V", "I ii iii", "I III VI", "ii V I"], answer: 0, explain: "I, IV, V." },
        { q: "Blues chords are usually:", options: ["Dominant 7ths", "Major 7ths", "Diminished", "Augmented"], answer: 0, explain: "Dominant 7ths." },
        { q: "I, IV, V in C major:", options: ["C F G", "C D E", "C G A", "C E G"], answer: 0, explain: "C, F, G." },
        { q: "Bars in a 12-bar blues:", options: ["12", "8", "16", "4"], answer: 0, explain: "Twelve." }
      ]
    }
  },

  /* ---------------------------------------------------------- */
  {
    id: "cadences",
    title: "Cadences",
    icon: "🔚",
    color: "linear-gradient(135deg,#16b364,#0a7a44)",
    desc: "Musical 'punctuation' — perfect, plagal, imperfect and interrupted.",
    levels: [
      {
        id: "cad-1",
        title: "Perfect & Plagal",
        desc: "The two 'finished'-sounding cadences.",
        questions: [
          { q: "A PERFECT cadence is the chord progression…", options: ["V – I", "IV – I", "I – V", "V – vi"], answer: 0, explain: "Perfect cadence = <b>V–I</b>, a strong, finished sound." },
          { q: "A PLAGAL cadence is the chord progression…", options: ["IV – I", "V – I", "I – IV", "V – vi"], answer: 0, explain: "Plagal cadence = <b>IV–I</b>, the 'Amen' cadence." },
          { q: "The plagal cadence is nicknamed the…", options: ["'Amen' cadence", "'Question' cadence", "'Surprise' cadence", "'Half' cadence"], answer: 0, explain: "IV–I is the church <b>'Amen'</b> cadence." },
          { q: "A cadence is…", options: ["A pair of chords ending a musical phrase", "A single note", "A fast scale", "A key signature"], answer: 0, explain: "A <b>cadence</b> is two chords that punctuate the end of a phrase." },
          { q: "In C major, a perfect cadence uses the chords…", options: ["G – C", "F – C", "C – G", "G – A minor"], answer: 0, explain: "V–I in C major = <b>G then C</b>." }
        ]
      },
      {
        id: "cad-2",
        title: "Imperfect & Interrupted",
        desc: "The 'unfinished' and 'surprise' cadences.",
        questions: [
          { q: "An IMPERFECT cadence ENDS on which chord?", options: ["V (the dominant)", "I (the tonic)", "IV", "vi"], answer: 0, explain: "Imperfect cadence ends on chord <b>V</b> — it sounds unfinished, like a question." },
          { q: "An INTERRUPTED cadence is the progression…", options: ["V – vi", "V – I", "IV – I", "I – V"], answer: 0, explain: "Interrupted cadence = <b>V–vi</b>: you expect I but get vi — a 'surprise'." },
          { q: "Which cadence sounds the most 'finished' and final?", options: ["Perfect", "Imperfect", "Interrupted", "Plagal is the only finished one"], answer: 0, explain: "The <b>perfect</b> cadence (V–I) gives the strongest sense of conclusion." },
          { q: "An imperfect cadence is often described as sounding like a…", options: ["Question / unfinished", "Full stop", "Amen", "Surprise"], answer: 0, explain: "Ending on V leaves it open — like a <b>question</b>." },
          { q: "In C major, an interrupted cadence would move from G to…", options: ["A minor", "C", "F", "G7"], answer: 0, explain: "V–vi in C major = G to <b>A minor</b>." },
          { q: "Which cadence creates a 'surprise' by avoiding the expected tonic?", options: ["Interrupted", "Perfect", "Plagal", "Imperfect"], answer: 0, explain: "The <b>interrupted</b> cadence (V–vi) thwarts the expected V–I." }
        ]
      }
    ],
    exam: {
      questions: [
        { q: "Perfect cadence:", options: ["V – I", "IV – I", "I – V", "V – vi"], answer: 0, explain: "V–I." },
        { q: "Plagal cadence:", options: ["IV – I", "V – I", "I – IV", "V – vi"], answer: 0, explain: "IV–I." },
        { q: "Plagal nickname:", options: ["Amen", "Question", "Surprise", "Half"], answer: 0, explain: "Amen." },
        { q: "Imperfect cadence ends on:", options: ["V", "I", "IV", "vi"], answer: 0, explain: "Chord V." },
        { q: "Interrupted cadence:", options: ["V – vi", "V – I", "IV – I", "I – V"], answer: 0, explain: "V–vi." },
        { q: "Most finished-sounding:", options: ["Perfect", "Imperfect", "Interrupted", "None"], answer: 0, explain: "Perfect." },
        { q: "Perfect cadence in C major:", options: ["G – C", "F – C", "C – G", "G – Am"], answer: 0, explain: "G to C." },
        { q: "Cadence that 'surprises':", options: ["Interrupted", "Perfect", "Plagal", "Imperfect"], answer: 0, explain: "Interrupted." }
      ]
    }
  }
];

const PASS_MARK = 0.6; // 60% to pass / unlock
