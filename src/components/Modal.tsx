import type { PropsWithChildren } from "react";

function Modal({
	onClose,
	children,
}: PropsWithChildren<{ onClose: () => void }>) {
	return (
		<div className="bg-black/50 fixed inset-0 flex items-center justify-center z-10" onClick={(e) => {
			e.stopPropagation();
			onClose();
		}}>
			<div className="bg-slate-100 rounded-md shadow-2xl p-4 flex flex-col gap-4">
				{children}
			</div>
		</div>
	);
}

export default Modal;
