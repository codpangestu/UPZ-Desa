import { z } from 'zod';

const baseFields = {
  nama: z.string().min(1, 'Nama wajib diisi'),
  nohp: z
    .string()
    .min(1, 'Nomor HP wajib diisi')
    .refine((val) => /^0[0-9]{8,12}$/.test(val.replace(/[\s-]/g, '')), 'Format nomor HP tidak valid'),
  alamat: z.string().min(1, 'Alamat wajib diisi'),
  jenis_kelamin: z.string().min(1, 'Jenis kelamin wajib dipilih'),
  keterangan: z.string(),
};

/**
 * Satu skema untuk SEMUA jenis anggota (ustadz/marbot/jamaah).
 *
 * Field khusus jenis tetap ada di objek (agar form bisa register semua field),
 * tetapi kewajibannya divalidasi per jenis lewat `getSchemaForJenis`. Dengan
 * begitu tipe input & output skema identik sehingga `zodResolver` cocok
 * langsung dengan `useForm` tanpa cast tipe.
 */
export const anggotaFormSchema = z.object({
  ...baseFields,
  bidang_keahlian: z.string(),
  tugas: z.string(),
  status_keaktifan: z.string(),
});

export type AnggotaFormValues = z.infer<typeof anggotaFormSchema>;

const JENIS_FIELD: Record<
  string,
  { field: 'bidang_keahlian' | 'tugas' | 'status_keaktifan'; message: string }
> = {
  ustadz: { field: 'bidang_keahlian', message: 'Bidang keahlian wajib dipilih' },
  marbot: { field: 'tugas', message: 'Tugas wajib dipilih' },
  jamaah: { field: 'status_keaktifan', message: 'Status keaktifan wajib dipilih' },
};

export function getSchemaForJenis(jenis: string) {
  const { field, message } = JENIS_FIELD[jenis] ?? JENIS_FIELD.ustadz;
  return anggotaFormSchema.superRefine((values, ctx) => {
    if (!values[field]) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: [field], message });
    }
  });
}
