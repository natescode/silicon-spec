// AUTOGENERATED FILE
// This file was generated from silicon-simple.ohm by `ohm generateBundles`.

import {
  BaseActionDict,
  Grammar,
  IterationNode,
  Node,
  NonterminalNode,
  Semantics,
  TerminalNode
} from 'ohm-js';

export interface SiliconActionDict<T> extends BaseActionDict<T> {
  Program?: (this: NonterminalNode, arg0: IterationNode) => T;
  SourceElement_sourceExp?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode) => T;
  SourceElement?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  EXP_binaryExp?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode) => T;
  EXP_lit?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  EXP?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  binOp?: (this: NonterminalNode, arg0: TerminalNode) => T;
  keyword?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode) => T;
  literal?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  stringLiteral?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: TerminalNode) => T;
  stringChar?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  lineTerminator?: (this: NonterminalNode, arg0: TerminalNode) => T;
  numericLiteral?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  binLiteral?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: IterationNode, arg3: IterationNode) => T;
  bit?: (this: NonterminalNode, arg0: TerminalNode) => T;
  hexLiteral?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: IterationNode, arg3: IterationNode) => T;
  octLiteral?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: IterationNode, arg3: IterationNode) => T;
  octDigit?: (this: NonterminalNode, arg0: TerminalNode) => T;
  floatLiteral?: (this: NonterminalNode, arg0: IterationNode, arg1: IterationNode, arg2: IterationNode, arg3: TerminalNode, arg4: IterationNode) => T;
  intLiteral?: (this: NonterminalNode, arg0: IterationNode, arg1: IterationNode, arg2: IterationNode) => T;
  booleanLiteral?: (this: NonterminalNode, arg0: TerminalNode) => T;
  identifier_iden1?: (this: NonterminalNode, arg0: IterationNode, arg1: IterationNode) => T;
  identifier_iden2?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode) => T;
  identifier?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  discard?: (this: NonterminalNode, arg0: TerminalNode) => T;
  space?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  whitespace_verticalTab?: (this: NonterminalNode, arg0: TerminalNode) => T;
  whitespace_formFeed?: (this: NonterminalNode, arg0: TerminalNode) => T;
  whitespace_noBreakSpace?: (this: NonterminalNode, arg0: TerminalNode) => T;
  whitespace_byteOrderMark?: (this: NonterminalNode, arg0: TerminalNode) => T;
  whitespace?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  unicodeSpaceSeparator?: (this: NonterminalNode, arg0: TerminalNode) => T;
}

export interface SiliconSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: SiliconActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: SiliconActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: SiliconActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: SiliconActionDict<T>): this;
}

export interface SiliconGrammar extends Grammar {
  createSemantics(): SiliconSemantics;
  extendSemantics(superSemantics: SiliconSemantics): SiliconSemantics;
}

declare const grammar: SiliconGrammar;
export default grammar;

