import { CreateChallengeSubmission } from '../usecases/create-challenge-submission';

describe('Create challeng submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const sut = new CreateChallengeSubmission();

        const response = sut.execute({
            studentId: 'fake-student-id',
            challengeId: 'fake-challeng-id'
        });

        expect(response).toBeTruthy();
    });
});