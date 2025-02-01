import { mapProjectData } from './project.mapper';

describe('mapProjectData', () => {
  it('should correctly map project data', () => {
    const input = { project_id: 1, project_name: 'Test Project', project_status: 'active' };
    const expectedOutput = { id: 1, name: 'Test Project', status: 'active' };

    const result = mapProjectData(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should return undefined for missing fields', () => {
    const input = { project_id: 1 };
    const result = mapProjectData(input);

    expect(result).toEqual({ id: 1, name: undefined, status: undefined });
  });
});