/**
 * skylark-highlightjs - A version of highlightjs.js that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-highlightjs/
 * @license MIT
 */
define(["../highlight"],function(e){return{aliases:["pb","pbi"],keywords:"And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro NewList Not Or ProcedureReturn Protected Prototype PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion Swap To Wend While With XIncludeFile XOr Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL",contains:[e.COMMENT(";","$",{relevance:0}),{className:"function",begin:"\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",end:"\\(",excludeEnd:!0,returnBegin:!0,contains:[{className:"keyword",begin:"(Procedure|Declare)(C|CDLL|DLL)?",excludeEnd:!0},{className:"type",begin:"\\.\\w*"},e.UNDERSCORE_TITLE_MODE]},{className:"string",begin:'(~)?"',end:'"',illegal:"\\n"},{className:"symbol",begin:"#[a-zA-Z_]\\w*\\$?"}]}});
//# sourceMappingURL=../sourcemaps/languages/purebasic.js.map
