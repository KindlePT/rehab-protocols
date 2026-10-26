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
  },
  {
    file: "meniscus.html",
    title: "Meniscus repair and transplant (Noyes chart)",
    area: "Knee",
    status: "review",
    note: "Return-to-run and sport criteria are not in the chart. Add your own, and confirm brace and early motion limits with the surgeon.",
    selectors: [
      { id: "repair", label: "Procedure", options: [
          { id: "pr", label: "Peripheral repair" },
          { id: "cx", label: "Complex repair (inside-out)" },
          { id: "tx", label: "Transplant" } ] }
    ]
  },
  {
    file: "rtc.html",
    title: "Rotator cuff repair (small-medium and large-massive)",
    area: "Shoulder",
    status: "review",
    note: "Source guidelines are marked OSUWMC use only. Confirm permission before sending patient links. Also check the merged week bands and the flagged conflicts.",
    selectors: [
      { id: "tear", label: "Tear size", options: [
          { id: "sm", label: "Small-medium" },
          { id: "lm", label: "Large-massive" } ] },
      { id: "sub", label: "Subscapularis", options: [
          { id: "std", label: "Not repaired" },
          { id: "sub", label: "Repaired" } ] }
    ]
  },
  {
    file: "acl.html",
    title: "ACL reconstruction (Noyes slower track), with optional meniscus repair",
    area: "Knee",
    status: "review",
    note: "Chart is for revisions, allografts, and complex knees. Graft choice only adds notes. The ACL + meniscus combination is my stricter-limit rule, not a published protocol. Confirm with the surgeon.",
    selectors: [
      { id: "graft", label: "Graft", options: [
          { id: "bt", label: "Patellar tendon (BTB)" },
          { id: "ht", label: "Hamstring" },
          { id: "qt", label: "Quadriceps tendon" },
          { id: "al", label: "Allograft" } ] },
      { id: "men", label: "Meniscus", options: [
          { id: "none", label: "No meniscus repair" },
          { id: "pr", label: "Peripheral repair" },
          { id: "cx", label: "Complex repair" } ] }
    ]
  }
];
