import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "Campañas" }, style: { background: "#22c55e", color: "#000" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "Flotas" }, style: { background: "#0ea5e9" } },
    { id: "3", position: { x: -150, y: 200 }, data: { label: "Equipos" }, style: { background: "#a855f7" } },
    { id: "4", position: { x: 150, y: 200 }, data: { label: "Contenido / Ads" }, style: { background: "#facc15", color: "#000" } },
    { id: "5", position: { x: 0, y: 300 }, data: { label: "Archivos st_contenido" }, style: { background: "#f472b6" } },
];

const edges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
    { id: "e2-4", source: "2", target: "4", animated: true },
    { id: "e3-5", source: "3", target: "5", animated: true },
    { id: "e4-5", source: "4", target: "5", animated: true },
];

export default function GrafoMicroTV() {
    return (
        <div style={{ width: "100%", height: 400 }} className="rounded-lg overflow-hidden border border-green-500">
            <ReactFlow nodes={nodes} edges={edges} fitView>
                <Background gap={20} />
                <Controls />
            </ReactFlow>
        </div>
    );
}
