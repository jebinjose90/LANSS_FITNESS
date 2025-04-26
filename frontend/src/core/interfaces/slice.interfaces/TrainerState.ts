export interface TrainerState {
  trainername: string | null;
  imageUrl: string | null;
  profile: any;
  loading: boolean;
  error: string | null;
  trainerData: any;
  isTrainerAuthenticated: boolean;
}