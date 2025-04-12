
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Save, 
  Play, 
  Trash2, 
  Plus, 
  ChevronsUp, 
  ChevronsDown,
  Undo,
  Redo,
  Download
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface BuilderToolbarProps {
  name: string;
  onNameChange: (name: string) => void;
  onSave: () => void;
  onTest: () => void;
  onClear: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onExport: () => void;
}

const BuilderToolbar: React.FC<BuilderToolbarProps> = ({
  name,
  onNameChange,
  onSave,
  onTest,
  onClear,
  onZoomIn,
  onZoomOut,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onExport
}) => {
  return (
    <div className="flex items-center justify-between border-b bg-card p-3">
      <div className="flex items-center space-x-4">
        <Input
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="font-medium text-lg w-64"
          placeholder="Untitled Agent"
        />
        
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onUndo}
            disabled={!canUndo}
          >
            <Undo className="h-4 w-4" />
            <span className="sr-only">Undo</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onRedo}
            disabled={!canRedo}
          >
            <Redo className="h-4 w-4" />
            <span className="sr-only">Redo</span>
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center border rounded-md">
          <Button variant="ghost" size="icon" className="rounded-none border-r" onClick={onZoomOut}>
            <ChevronsDown className="h-4 w-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-none" onClick={onZoomIn}>
            <ChevronsUp className="h-4 w-4" />
            <span className="sr-only">Zoom in</span>
          </Button>
        </div>
        
        <Button variant="outline" size="sm" onClick={onExport}>
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        
        <Button variant="outline" size="sm" onClick={onClear}>
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
        
        <Button variant="outline" size="sm" onClick={onTest}>
          <Play className="h-4 w-4 mr-2" />
          Test
        </Button>
        
        <Button size="sm" onClick={onSave}>
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
};

export default BuilderToolbar;
