import { create } from "zustand";

interface Document {
  id: string;
  name: string;
  issuer: string;
  totalTaxes: string;
  netValue: string;
  creationDate: string;
  lastUpdate: string;
  code: string;
}

interface DocumentStore {
  documents: Document[];
  isModalOpen: boolean;
  formData: Partial<Document>;
  setDocuments: (docs: Document[]) => void;
  fetchDocuments: () => Promise<void>;
  addDocument: (doc: Document) => void;
  toggleModal: () => void;
  resetForm: () => void;
  updateForm: (key: keyof Document, value: string) => void;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  isModalOpen: false,
  formData: {
    name: "",
    issuer: "",
    totalTaxes: "",
    netValue: "",
    creationDate: "",
    lastUpdate: "",
    code: "",
  },
  fetchDocuments: async () => {
    try {
      const response = await fetch("/api/documents");
      const data = await response.json();
      set({ documents: data });
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  },
  setDocuments: (docs) => set({ documents: docs }),
  addDocument: (doc) =>
    set((state) => ({ documents: [...state.documents, doc] })),
  toggleModal: () =>
    set((state) => ({ isModalOpen: !state.isModalOpen })),
  resetForm: () =>
    set({
      formData: {
        name: "",
        issuer: "",
        totalTaxes: "",
        netValue: "",
        creationDate: "",
        lastUpdate: "",
        code: "",
      },
    }),
  updateForm: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    })),
}));