import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function AboutSkeleton() {
  return (
    <div>
      <h2>
        <Skeleton width={200} height={30} />
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} count={3} height={20} />
        ))}
      </div>
    </div>
  );
}
