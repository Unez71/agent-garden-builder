
import { 
  MessageSquare, 
  Brain, 
  Workflow, 
  Database, 
  Search, 
  Calculator, 
  Code, 
  BarChart4, 
  Globe, 
  ArrowRight, 
  ArrowLeft, 
  SplitSquareVertical,
  Repeat,
  Cpu,
  LucideIcon
} from "lucide-react";
import { NodeType } from "@/types/builder";

export function getNodeIcon(type: NodeType): LucideIcon {
  switch (type) {
    // LLM nodes
    case 'llm-prompt':
      return MessageSquare;
    case 'llm-completion':
      return MessageSquare;
    case 'llm-chat':
      return MessageSquare;
    case 'llm-system-prompt':
      return Brain;
    
    // Memory nodes
    case 'memory-store':
      return Database;
    case 'memory-retrieve':
      return Database;
    case 'memory-vector':
      return Database;
    case 'memory-conversation':
      return Database;
    
    // Tool nodes
    case 'tool-web-search':
      return Search;
    case 'tool-calculator':
      return Calculator;
    case 'tool-code-executor':
      return Code;
    case 'tool-data-analysis':
      return BarChart4;
    case 'tool-api':
      return Globe;
    
    // Flow nodes
    case 'flow-input':
      return ArrowRight;
    case 'flow-output':
      return ArrowLeft;
    case 'flow-condition':
      return SplitSquareVertical;
    case 'flow-loop':
      return Repeat;
    
    default:
      return Cpu;
  }
}

export function getNodeColor(type: NodeType): string {
  if (type.startsWith('llm-')) {
    return 'bg-garden-purple';
  } else if (type.startsWith('memory-')) {
    return 'bg-garden-teal';
  } else if (type.startsWith('tool-')) {
    return 'bg-amber-500';
  } else if (type.startsWith('flow-')) {
    return 'bg-garden-slate';
  } else {
    return 'bg-slate-500';
  }
}
