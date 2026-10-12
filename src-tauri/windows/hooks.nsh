; NSIS installer hooks for Zeltavia Windows bundle
; Ensures desktop shortcut with Zeltavia icon is created upon installation

!macro NSIS_HOOK_POSTINSTALL
  CreateShortCut "$DESKTOP\Zeltavia.lnk" "$INSTDIR\Zeltavia.exe" "" "$INSTDIR\Zeltavia.exe" 0
!macroend

!macro NSIS_HOOK_PREUNINSTALL
  Delete "$DESKTOP\Zeltavia.lnk"
!macroend
