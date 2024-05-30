import { zodResolver } from '@hookform/resolvers/zod';
import { useForm} from 'react-hook-form';
import {z} from 'zod';

interface FormProps {
  onSubmit: (data: Props) => void;
}

interface Props {
  description: String,
  amount: number,
  category: 'groceries' | 'utilities' | 'entertainment';
}

const schema = z.object({
  description: z.string().min(3, { message: "Description must be at least 3 characters long" }),
  amount: z.number({invalid_type_error: 'Amount is required'}).nonnegative({ message: "Amount must be a positive number" }),
  category: z.enum(['groceries', 'utilities', 'entertainment'], { message: "Select a valid category" }),
});





const Trackify: React.FC<FormProps> = ( {onSubmit}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Props>({
    resolver: zodResolver(schema),
  });
  
  
return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-5">
      <div className="mb-3">
        <label htmlFor="descriptionId" className="form-label">Description</label>
        <input
          {...register('description')}
          type="text" className="form-control" id="descriptionId" placeholder="Description" />
        {errors.description && <p className="text-danger">{errors.description.message as String}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="amountId" className="form-label">Amount</label>
        <input
          {...register('amount', {valueAsNumber: true})}
          type='number' className="form-control" id="amountId" placeholder="Amount" />
        {errors.amount && <p className="text-danger">{errors.amount.message as String}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="inputState" className="form-label">Category</label>
        <select
          {...register('category')}
          id="inputState"
          className="form-select"
        >
          <option value="">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && <p className="text-danger">{errors.category.message as String}</p>}
      </div>

      <button className="btn btn-primary mb-5">Submit</button>
    </div>
  </form>
);

}
export default Trackify
