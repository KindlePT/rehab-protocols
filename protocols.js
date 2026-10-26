/* ------------------------------------------------------------------
   Your protocol list. To add a protocol: upload its .html file to the
   same GitHub folder, then copy one block below, change the values, and save.

   status:  "ready"   = checked against current sources, OK to send to patients
            "review"  = still needs a source check (the link maker shows a warning)
   note:    one short line shown on the card (what to check, or when it was reviewed)
   selectors: only for protocols with a choice that changes the numbers
              (for example graft location). "id" must match the protocol page.
   ------------------------------------------------------------------ */
window.PROTOCOLS = [
  {
    file: "bear.html",
    title: "BEAR implant + complex meniscus repair",
    area: "Knee",
    status: "review",
    note: "Check weight bearing, brace, and ROM against the current Miach protocol (2026 update) and the Noyes chart.",
    selectors: []
  },
  {
    file: "maci.html",
    title: "MACI knee cartilage implant",
    area: "Knee",
    status: "review",
    note: "Flexion limits conflict with the Feb 2021 Vericel manual. Resolve before sending.",
    selectors: [
      { id: "joint", label: "Graft location", options: [
          { id: "tf", label: "Tibiofemoral" },
          { id: "pf", label: "Patellofemoral" } ] },
      { id: "defects", label: "Number of defects", options: [
          { id: "single", label: "Single" },
          { id: "multiple", label: "Multiple" } ] }
    ]
  }
];
